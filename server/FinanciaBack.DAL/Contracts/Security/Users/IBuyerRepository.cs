using FinanciaBack.Models;

namespace FinanciaBack.DAL
{
    public interface IBuyerRepository : IRepository<Buyer>
    {
        Task<Buyer?> GetByUserEmailAsync(string email, bool fullCustomer);
        Task<Buyer?> GetByPublicKeyAsync(string id, bool fullCustomer);
        Task<IEnumerable<Buyer>> GetPaginatedStripeCustomers(PaginationVM<Buyer> model);
        void Update(Buyer updatedCustomer);
    }
}
