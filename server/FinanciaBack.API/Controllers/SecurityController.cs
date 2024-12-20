﻿using FinanciaBack.DAL;
using FinanciaBack.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using FinanciaBack.BLL;
using System.Security.Claims;

namespace FinanciaBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SecurityController : BaseAPI
    {
        #region DependencyInjections
        private readonly JwtSettings _jwtSettings;
        private readonly UserManager<UserEF> _userManager;
        private readonly SignInManager<UserEF> _signInManager;
        private readonly IUserStore<UserEF> _userStore;
        private readonly IUserEmailStore<UserEF> _emailStore;
        private readonly IUnitOfWork _unitOfWork;        
        private readonly IJwtSecurityManager _jwtSecurityManager;

        public SecurityController(JwtSettings jwtSettings,
            UserManager<UserEF> userManager,
            SignInManager<UserEF> signInManager,
            IUserStore<UserEF> userStore,            
            IUnitOfWork unitOfWork, IJwtSecurityManager jwtSecurityManager) 
        {
            _jwtSettings = jwtSettings;
            _userManager = userManager;
            _signInManager = signInManager;
            _userStore = userStore;
            _unitOfWork = unitOfWork;
            _emailStore = GetEmailStore();            
            _jwtSecurityManager = jwtSecurityManager;
        }
        #endregion

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {                    
                    var login = await _jwtSecurityManager.LoginAsync(_jwtSettings, _userManager, _signInManager, model);

                    return login.Success ? Ok(new { message = "Login Successful", token = login.Token, role = RequestRole(User)  }) : BadRequest("Invalid login attempt");
                }
                catch (Exception ex)
                {
                    //throw ex;
                    return Problem(detail: "Server error: " + ex.Message);
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterUserVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {                    

                    var user = CreateUser();

                    user.LoginTypeId = model.LoginTypeId!.Value;
                    user.EmailConfirmed = model.IsSocialLogin!.Value;

                    var result = await _jwtSecurityManager.RegisterAsync(user, _userStore, _emailStore, _userManager, _unitOfWork, model);

                    if (result.Succeeded)
                    {                    

                        if ( model.Role == "buyer")
                        {
                            await _userManager.AddToRoleAsync(user, UserRole.Buyer.ToString());

                            var buyer = new Buyer
                            {
                                EntityPublicKey = Guid.NewGuid(),
                                UserEFId = user.Id,
                                User = user

                            };
                            await _unitOfWork.Buyers.AddAsync(buyer);
                            await _jwtSecurityManager.SaveAsync();
                        }
                        else if (model.Role == "investor")
                        {
                            await _userManager.AddToRoleAsync(user, UserRole.Investor.ToString());

                            var investor = new Investor
                            {
                                EntityPublicKey = Guid.NewGuid(),
                                UserEFId = user.Id,
                                User = user

                            };
                            await _unitOfWork.Investors.AddAsync(investor);
                            await _jwtSecurityManager.SaveAsync();
                        }
                                          

                        if (!model.IsSocialLogin!.Value)
                        {
                            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                            token = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(token));
                           
                            /*
                            var subject = "Email confirmation";

                            var callbackUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Identity/Account/ConfirmEmail?userId={user.Id}&code={token}";


                            var htmlMessage = $"<p>URL: {callbackUrl}</p>";

                            await MasterManager.EmailManager.SendEmailAsync(model.Email!, subject, htmlMessage);*/
                        }
                        var loginVM = new LoginVM
                        {
                            Username = model.Email,
                            Password = model.Password
                        };

                        var login = await _jwtSecurityManager.LoginAsync(_jwtSettings, _userManager, _signInManager, loginVM);

                        return Ok(new { Message = "User registered successfully", token = login.Token, role = model.Role});
                    }
                    else
                    {
                        return BadRequest(new { Error = result.Errors?.FirstOrDefault()?.Description });
                    }
                }
                catch (Exception ex)
                {
                    return Problem(detail: $"Server error: {ex}");
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Dev, Customer")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequestVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {                    
                    var result = await _jwtSecurityManager.ChangePasswordAsync(RequestEmail(User), _userManager, _signInManager, model);

                    if (result.Succeeded)
                    {
                        return Ok();
                    }
                    else
                    {
                        return BadRequest(result.Errors);
                    }
                }
                catch (Exception ex)
                {
                    return Problem(detail: "Server error: " + ex.Message);
                }
            }
            return BadRequest();
        }

        #region Private methods
        private UserEF CreateUser()
        {
            try
            {
                var dateNow = DateTime.Now;
                var user = Activator.CreateInstance<UserEF>();

                user.EntityPublicKey = Guid.NewGuid();
                user.Created = dateNow;
                user.CreatedBy = 1;
                user.Modified = dateNow;
                user.ModifiedBy = 1;

                return user;
            }
            catch
            {
                throw new InvalidOperationException($"Can't create an instance of '{nameof(UserEF)}'. " +
                    $"Ensure that '{nameof(UserEF)}' is not an abstract class and has a parameterless constructor");
            }
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        private string RequestRole(ClaimsPrincipal user)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var claim = claimsIdentity.FindFirst(ClaimTypes.Role);

            return claim.Value;
        }

        private IUserEmailStore<UserEF> GetEmailStore()
        {
            if (!_userManager.SupportsUserEmail)
            {
                throw new NotSupportedException("The default UI requires a user store with email support.");
            }
            return (IUserEmailStore<UserEF>)_userStore;
        }
        #endregion  
    }
}
