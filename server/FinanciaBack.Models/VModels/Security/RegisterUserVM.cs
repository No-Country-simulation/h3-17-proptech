using System.ComponentModel.DataAnnotations;


namespace FinanciaBack.Models
{
    public class RegisterUserVM : RegisterVM
    {

        [Required]
        public bool? IsSocialLogin { get; set; }
        [Required]
        public int? LoginTypeId { get; set; }
       
        [Required]
        [RegularExpression(@"^\d{2}/\d{2}/\d{4}$", ErrorMessage = "The date format must be DD/MM/YYYY")]
        [DateRange]
        public string? BirthDate { get; set; }

       


        public ContactEF GetContact()
        {
            string dateFormat = "dd/MM/yyyy";

            var contact = new ContactEF
            {
                EntityPublicKey = Guid.NewGuid(),
                FirstName = Name!,
                FirstLastName = LastName!,
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,                             
                Email = Email!,
                Birthdate = BirthDate is null ? null : DateTime.ParseExact(BirthDate, dateFormat, null),
            };

            contact.DisplayName = contact.FullName;

            return contact;
        }
    }
}
