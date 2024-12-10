using FinanciaBack.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace FinanciaBack.DAL
{
    public class DbInitializer : IDbInitializer
    {
        private readonly UserManager<UserEF> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly WebAppContext _webAppContext;

        public DbInitializer(UserManager<UserEF> userManager, RoleManager<Role> roleManager, WebAppContext webAppContext)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _webAppContext = webAppContext;
        }

        public void Initialize()
        {
            // Apply migrations if they are not applied
            if (_webAppContext.Database.GetPendingMigrations().Count() > 0)
            {
                _webAppContext.Database.Migrate();
            }

            // Create roles if they are not created

            if (!_roleManager.RoleExistsAsync(UserRole.Dev.ToString()).GetAwaiter().GetResult())
            {
                // Create all roles
                _roleManager.CreateAsync(new Role(UserRole.Dev.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Buyer.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Investor.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Admin.ToString())).GetAwaiter().GetResult();

                InitialData();
            }
        }

        private void InitialData()
        {
            #region Dev member
            // If roles are not createad, then we will create admin user as well
            var email = "rodridev@outlook.com";
            var dateNow = DateTime.Now;

            var contact = new ContactEF
            {
                FirstName = "Rodrigo",
                FirstLastName = "Kohnen",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            var user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            email = "investor@test.com";

            contact = new ContactEF
            {
                FirstName = "Investor",
                FirstLastName = "User",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            user = new UserEF
            {
                Email = email,
                Contact = contact,
                UserName = email,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Test1234!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Investor.ToString()).GetAwaiter().GetResult();

            var investor = new Investor
            {
                User = user,
            };

            SetSecurityDefaults(investor, dateNow, true);

            _webAppContext.Investors!.Add(investor);

            email = "dev2024@gmail.com";

            contact = new ContactEF
            {
                FirstName = "Dev",
                FirstLastName = "Dev",
                SecondLastName = "Second",
                Birthdate = DateTime.Now,             
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
                
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            user = new UserEF
            {
                Email = email,
                Contact = contact,
                UserName = email,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "ksjkjvbsdkvnkjsA123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Buyer.ToString()).GetAwaiter().GetResult();

            
            var buyer = new Buyer
            {
                User = user,
            };

            SetSecurityDefaults(buyer, dateNow, true);

            _webAppContext.Buyers!.Add(buyer);
            

            email = "pedro@rodridev.net";

            contact = new ContactEF
            {
                FirstName = "Pedro",
                FirstLastName = "Ruiz",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            user = new UserEF
            {
                Email = email,
                Contact = contact,
                UserName = email,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "ASDAXCVx21!").GetAwaiter().GetResult();
            
            _userManager.AddToRoleAsync(user, UserRole.Admin.ToString()).GetAwaiter().GetResult();

            #endregion

            _webAppContext.SaveChanges();
        }

        private void SetSecurityDefaults(IAuditEntity entity, DateTime dateNow, bool setPublicKey = false, int createdBy = 1)
        {
            entity.Created = dateNow;
            entity.CreatedBy = createdBy;
            entity.Modified = dateNow;
            entity.ModifiedBy = createdBy;
            if (setPublicKey)
            {
                if (entity is IPublicKeyEntity)
                {
                    var entityPublicKey = entity as IPublicKeyEntity;
                    if (entityPublicKey != null)
                    {
                        var newGuid = Guid.Parse("00000000-0000-0000-0000-000000000000");

                        if (entityPublicKey.EntityPublicKey.Equals(newGuid))
                        {
                            entityPublicKey.EntityPublicKey = Guid.NewGuid();
                        }
                    }
                }
            }
        }
    }

}
