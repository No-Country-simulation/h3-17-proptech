using FinanciaBack.Models;

namespace FinanciaBack.DAL
{
    public interface IInvestorRepository : IRepository<Investor>
    {
        Task<Investor?> GetByUserEmailAsync(string email, bool fullCustomer);
        Task<Investor?> GetByPublicKeyAsync(string id, bool fullCustomer);
        Task<IEnumerable<Investor>> GetPaginatedStripeCustomers(PaginationVM<Investor> model);
        void Update(Investor updatedCustomer);
    }
}
