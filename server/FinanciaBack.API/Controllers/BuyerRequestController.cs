
using FinanciaBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FinanciaBack.BLL;
using System.Net;
using Microsoft.AspNetCore.Authentication.JwtBearer;


namespace FinanciaBack.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BuyerRequestController : BaseAPI
    {
        private readonly IBuyerRequestService _buyerRequestService;
        public BuyerRequestController(IBuyerRequestService buyerRequestService)
        {
            _buyerRequestService = buyerRequestService;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Buyer")]
        public async Task<IActionResult> CreateBuyerRequest([FromBody] CreateBuyerRequestVM model)
        {
          

            if (ModelState.IsValid)
            {
                try
                {
                    var createResponse =  await _buyerRequestService.CreateBuyerRequest(model, RequestEmail(User));

                    if (!createResponse.Success)
                    {
                        if (createResponse.StatusCode.Equals(HttpStatusCode.NotFound)) return NotFound(createResponse.Message);

                        if (createResponse.StatusCode.Equals(HttpStatusCode.BadRequest)) return BadRequest(createResponse.Message);
                    }

                    var response = model.CreateResponse(createResponse.PublicKey!);

                    return Ok(response);
                }
                catch (Exception ex)
                {
                    return Problem(detail: $"Server error: {ex.Message}");
                }
            }
            return BadRequest();


        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Buyer")]
        public async Task<IActionResult> GetAllMyRequests()
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var createResponse = await _buyerRequestService.GetAllMyRequests(RequestEmail(User));

                    if (createResponse.Count() == 0) return NotFound("There are no requests available.");

                    return Ok(createResponse);
                }
                catch (Exception ex)
                {
                    return Problem(detail: $"Server error: {ex.Message}");
                }
            }
            return BadRequest();
        }
      
    }
}

