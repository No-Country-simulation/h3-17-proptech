using FinanciaBack.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanciaBack.DAL
{


    public class BuyerRepository : Repository<Buyer>, IBuyerRepository
    {
        private WebAppContext _appContext;
        public BuyerRepository(WebAppContext appContext) : base(appContext)
        {
            _appContext = appContext;
        }

        public async Task<Buyer?> GetByPublicKeyAsync(string id, bool fullCustomer)
        {
            var publicKey = Guid.Parse(id);

            IQueryable<Buyer> command = _appContext
                .Buyers!;

            if (fullCustomer)
            {
                command = command
                .Include(e => e.User)
                .Include(e => e.User.Contact);
            }

            command = command.Where(e => e.EntityPublicKey == publicKey);

            return await command.FirstOrDefaultAsync();
        }

        public async Task<Buyer?> GetByUserEmailAsync(string email)
        {
            return await _appContext
            .Buyers!
            .Include(e => e.User)
            .Include(e => e.User.Contact)
            .Where(e => e.User.Email == email)
            .FirstOrDefaultAsync();
        }

        public Task<IEnumerable<Buyer>> GetPaginatedStripeCustomers(PaginationVM<Buyer> model)
        {
            throw new NotImplementedException();
        }

        public void Update(Buyer updatedCustomer)
        {
            _appContext.Buyers!.Update(updatedCustomer);
        }
    }
}
