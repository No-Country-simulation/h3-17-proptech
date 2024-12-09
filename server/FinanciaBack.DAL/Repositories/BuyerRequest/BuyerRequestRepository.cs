using FinanciaBack.DAL;
using FinanciaBack.Models;
using Microsoft.EntityFrameworkCore;


public class BuyerRequestRepository : Repository<BuyerRequest>, IBuyerRequestRepository
{
    private WebAppContext _appContext;
    public BuyerRequestRepository(WebAppContext appContext) : base(appContext)
    {
        _appContext = appContext;
    }

    public async Task<IEnumerable<BuyerRequest>> GetAllMyRequestsAsync(int id)
    {
     
        IQueryable<BuyerRequest> query = _appContext.BuyerRequests!.
            Where(p => p.Buyer!.Id == id);
      
        var buyerRequests = await query.AsNoTracking().ToListAsync();

        return buyerRequests;
    }


}