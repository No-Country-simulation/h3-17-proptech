using FinanciaBack.Models;

namespace FinanciaBack.DAL
{
    public interface IUserRepository : IRepository<UserEF>
    {
        Task<UserEF?> GetByEmailAsync(string email, bool fullUser);
        void Update(UserEF userEF);
    }
}
