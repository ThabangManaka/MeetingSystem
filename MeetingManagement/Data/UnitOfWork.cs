

using MeetingManagement.Repo;
using MeetingManagement.Interfaces;

namespace MeetingManagement.Data.Repo{

    public class UnitOfWork : IUnitOfWork{
private readonly DataContext dc;
public UnitOfWork(DataContext dc)
{
            this.dc =dc;
}
public IUserRepository UserRepository => new UserRepository(dc);
public IMeetingRepository MeetingRepository => new MeetingRepository(dc);
public IMeetingTypeRepository  MeetingTypeRepository  => new MeetingTypeRepository (dc);

public IMeetingItemRepository MeetingItemRepository => new MeetingItemRepository (dc);
      public async Task<bool> SaveAsync()
     {
    return await dc.SaveChangesAsync() > 0;
    }
    }
}