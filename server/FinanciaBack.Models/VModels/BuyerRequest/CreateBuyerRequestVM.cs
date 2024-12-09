

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace FinanciaBack.Models
{
    public class CreateBuyerRequestVM : BaseViewModel
    {
        [Precision(18, 2)]
        [Required(ErrorMessage = "Total amount is required.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Total amount must be greater than zero.")]
        public decimal? TotalAmount { get; set; }

        [Required(ErrorMessage = "Installments count is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Installments count must be at least 1.")]
        public int? InstallmentsCount { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(50, ErrorMessage = "Name cannot exceed 50 characters.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Surname is required.")]
        [StringLength(50, ErrorMessage = "Surname cannot exceed 50 characters.")]
        public string? SurName { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        [StringLength(100, ErrorMessage = "Address cannot exceed 100 characters.")]
        public string? Address { get; set; }

        [Required(ErrorMessage = "City is required.")]
        [StringLength(50, ErrorMessage = "City cannot exceed 50 characters.")]
        public string? City { get; set; }

        [Required(ErrorMessage = "Province is required.")]
        [StringLength(50, ErrorMessage = "Province cannot exceed 50 characters.")]
        public string? Province { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [Phone(ErrorMessage = "Invalid phone number format.")]
        [StringLength(15, ErrorMessage = "Phone number cannot exceed 15 characters.")]
        public string? PhoneNumber { get; set; }

        [Required(ErrorMessage = "DNI is required.")]
        [RegularExpression(@"\d{7,8}", ErrorMessage = "DNI must be 7 or 8 digits.")]
        public string? DNI { get; set; }
        public string? StateOfRequest { get; set; }
    }
}
