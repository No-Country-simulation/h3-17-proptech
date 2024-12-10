

namespace FinanciaBack.Models
{
    public class ShowBuyerRequestVM : BaseViewModel
    {
        public DateTime Created { get; set; }

        public string? FormattedName { get; set; }   
        public decimal? TotalAmount { get; set; }
        public int? InstallmentsCount { get; set; }
        public Guid EntityPublicKey { get; set; }
        public string? StateOfRequest { get; set; }


    }
}
