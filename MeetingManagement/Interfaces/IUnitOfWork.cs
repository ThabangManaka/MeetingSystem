namespace MeetingManagement.Interfaces{

public interface IUnitOfWork{

IUserRepository UserRepository {get;} 
IMeetingRepository MeetingRepository {get;}

IMeetingItemRepository MeetingItemRepository {get;}
IMeetingTypeRepository  MeetingTypeRepository {get;}
     Task<bool> SaveAsync();
}
}