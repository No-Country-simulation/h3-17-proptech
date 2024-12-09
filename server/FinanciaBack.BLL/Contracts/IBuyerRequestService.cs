
using FinanciaBack.Models;

namespace FinanciaBack.BLL
{
    public interface IBuyerRequestService
    {
        Task<BusinessResponse> CreateBuyerRequest(CreateBuyerRequestVM model, string email);
        Task<IEnumerable<ShowBuyerRequestVM>> GetAllMyRequests(string email);
    }
}
