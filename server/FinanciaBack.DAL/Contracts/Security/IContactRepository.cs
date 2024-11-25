using FinanciaBack.Models;


namespace FinanciaBack.DAL
{
    public interface IContactRepository : IRepository<ContactEF>
    {
        void Update(ContactEF contactEF);
    }


}
