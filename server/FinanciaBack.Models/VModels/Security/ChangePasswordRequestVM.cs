
using System.ComponentModel.DataAnnotations;


namespace FinanciaBack.Models
{
    public class ChangePasswordRequestVM
    {
        [Required]
        public string? CurrentPassword { get; set; }
        [Required]
        public string? NewPassword { get; set; }
    }
}
