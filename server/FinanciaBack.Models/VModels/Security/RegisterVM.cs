using System.ComponentModel.DataAnnotations;


namespace FinanciaBack.Models
{
    public class RegisterVM
    {
        [Required(ErrorMessage = "Name is required")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "LastName is required")]
        public string? LastName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Please input a valid email address")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "Password and confirm password does not match")]
        public string? ConfirmPassword { get; set; }
        [Required]
        [RegularExpression("^(buyer|investor)$", ErrorMessage = "The role must be either 'buyer' or 'investor'.")]
        public string? Role { get; set; }
    }
}
