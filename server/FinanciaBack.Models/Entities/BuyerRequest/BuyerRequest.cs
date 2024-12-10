
using Microsoft.EntityFrameworkCore;

namespace FinanciaBack.Models
{
    public class BuyerRequest : IAuditEntity, IPublicKeyEntity
    {
        public int Id { get; set; }
        public int? BuyerId { get; set; }
        public Buyer? Buyer { get; set; }
        [Precision (18,2)]        
        public decimal? TotalAmount { get; set; }
        public int? InstallmentsCount { get; set; }
        public string? Name { get; set; }
        public string? SurName { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? Province { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? DNI { get; set; }
        public string? StateOfRequest { get; set; }

        #region IPublicKeyEntity
        public Guid EntityPublicKey { get; set; }
        #endregion

        #region IAuditEntity
        public DateTime Created { get; set; }
        public int CreatedBy { get; set; }
        public DateTime Modified { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? Deleted { get; set; }
        public int? DeletedBy { get; set; }
        public DateTime? Locked { get; set; }
        public int? LockedBy { get; set; }
        #endregion

    }
}
