
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using FinanciaBack.BLL;
using FinanciaBack.DAL;
using FinanciaBack.Models;


namespace FinanciaBack.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<WebAppContext>(options => options.UseSqlServer(
                builder.Configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly("FinanciaBack.DAL")
            ));

            //Adding jwt service to program pipeline
            builder.Services.AddJWTTokenServices(builder.Configuration);
            builder.Services.AddHttpContextAccessor();

            //builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<WebAppContext>();
            builder.Services.AddIdentity<UserEF, Role>()
                .AddDefaultTokenProviders()
                .AddEntityFrameworkStores<WebAppContext>();

            var CorsRules = "CorsRules";
            builder.Services.AddCors(opt =>
            {
                opt.AddPolicy(name: CorsRules, builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });


            ConfigureSwagger();
            ConfigureDependencyInjection();

            builder.Services.Configure<IdentityOptions>(
                options => options.SignIn.RequireConfirmedEmail = true
            );

            builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.Cookie.HttpOnly = true;
                    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                    options.Cookie.SameSite = SameSiteMode.Strict;
                    options.Cookie.Name = "Security";
                    options.Cookie.MaxAge = TimeSpan.FromDays(30);
                });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                SeedDatabase();
            }

            app.UseCors(CorsRules);

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();

            void SeedDatabase()
            {

                using var scope = app.Services.CreateScope();
                var dbInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer>();
                dbInitializer.Initialize();
            }


            void ConfigureSwagger()
            {
                builder.Services.AddEndpointsApiExplorer();
                builder.Services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });

                    // Add JWT Authentication
                    var securityScheme = new OpenApiSecurityScheme
                    {
                        Name = "JWT Authentication",
                        Description = "Enter JWT Bearer token **_only_**",
                        In = ParameterLocation.Header,
                        Type = SecuritySchemeType.Http,
                        Scheme = "bearer",
                        BearerFormat = "JWT",
                        Reference = new OpenApiReference
                        {
                            Id = JwtBearerDefaults.AuthenticationScheme,
                            Type = ReferenceType.SecurityScheme
                        }
                    };
                    c.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, securityScheme);
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                { securityScheme, new string[] { } }
            }
                    );
                });
            }


            void ConfigureDependencyInjection()
            {

                builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
                builder.Services.AddScoped<IDbInitializer, DbInitializer>();
                builder.Services.AddScoped<IJwtSecurityManager, JwtSecurityManager>();

            }

        }

    }
}