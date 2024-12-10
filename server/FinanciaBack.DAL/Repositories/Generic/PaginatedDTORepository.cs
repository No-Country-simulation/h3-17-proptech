using Microsoft.EntityFrameworkCore;
using FinanciaBack.DAL;
using FinanciaBack.Models;


namespace FinanciaBack.Data;

public interface IPaginatedDTORepository<T, X> where T : class where X : class
{
    Task<IEnumerable<T>> GetPaginatedAsync(PaginationVM<T, X> model);
}

public class PaginatedDTORepository<T, X> : Repository<T>, IPaginatedDTORepository<T, X>, IRepository<T>
    where T : class, IDisplayNameEntity, IAuditEntity, IIdentifierEntity
    where X : class
{
    private readonly WebAppContext _appContext;
    public PaginatedDTORepository(WebAppContext appContext) : base(appContext)
    {
        _appContext = appContext;
        dbSet = _appContext.Set<T>();
    }

    #region Async
    public async Task<IEnumerable<T>> GetPaginatedAsync(PaginationVM<T, X> model)
    {
        var isDisplay = typeof(T).GetInterfaces().Contains(typeof(IDisplayNameEntity));

        if (!isDisplay) throw new Exception("Entity must implement IDisplayNameEntity");

        var isAuditable = typeof(T).GetInterfaces().Contains(typeof(IAuditEntity));

        if (!isAuditable) throw new Exception("Entity must implement IAuditEntity");

        var isIdentifier = typeof(T).GetInterfaces().Contains(typeof(IIdentifierEntity));

        if (!isIdentifier) throw new Exception("Entity must implement IIdentifierEntity");

        var isModelValid = model.PageNumber.HasValue && model.PageSize.HasValue;

        if (!isModelValid) throw new Exception("Page and size must have value");

        int page = model.PageNumber != null ? model.PageNumber.Value : 0;
        int size = model.PageSize != null ? model.PageSize.Value : 0;

        int skip = (page - 1) * size;

        IQueryable<T> command = dbSet;

        if (!String.IsNullOrEmpty(model.SearchString))
        {
            command = command
            .Where(e => e.Deleted == null && EF.Functions.Like(e.DisplayName!, "%" + model.SearchString + "%"))
            .Skip(skip)
            .Take(size)
            .OrderBy(e => e.Id);
        }
        else
        {
            command = command
            .Where(e => e.Deleted == null)
            .Skip(skip)
            .Take(size)
            .OrderBy(e => e.Id);
        }

        return await command.ToListAsync();
    }
    #endregion
}
