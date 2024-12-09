

using FinanciaBack.Models;

namespace FinanciaBack.DAL
{
    public interface IBuyerRequestRepository : IRepository<BuyerRequest>
    {
        Task<IEnumerable<BuyerRequest>> GetAllMyRequestsAsync(int id);
    }
}
