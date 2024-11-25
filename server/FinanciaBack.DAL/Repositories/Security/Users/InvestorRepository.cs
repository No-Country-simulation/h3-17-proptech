using FinanciaBack.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanciaBack.DAL
{


    public class InvestorRepository : Repository<Investor>, IInvestorRepository
    {
        private WebAppContext _appContext;
        public InvestorRepository(WebAppContext appContext) : base(appContext)
        {
            _appContext = appContext;
        }

        public async Task<Investor?> GetByPublicKeyAsync(string id, bool fullCustomer)
        {
            var publicKey = Guid.Parse(id);

            IQueryable<Investor> command = _appContext
                .Investors!;

            if (fullCustomer)
            {
                command = command
                .Include(e => e.User)
                .Include(e => e.User.Contact);
            }

            command = command.Where(e => e.EntityPublicKey == publicKey);

            return await command.FirstOrDefaultAsync();
        }

        public async Task<Investor?> GetByUserEmailAsync(string email, bool fullCustomer)
        {
            return await _appContext
            .Investors!
            .Include(e => e.User)
            .Include(e => e.User.Contact)
            .Where(e => e.User.Email == email)
            .FirstOrDefaultAsync();
        }

        public Task<IEnumerable<Investor>> GetPaginatedStripeCustomers(PaginationVM<Investor> model)
        {
            throw new NotImplementedException();
        }

        public void Update(Investor updatedCustomer)
        {
            _appContext.Investors!.Update(updatedCustomer);
        }
    }
}
