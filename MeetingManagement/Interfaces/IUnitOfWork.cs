namespace MeetingManagement.Interfaces{

public interface IUnitOfWork{

IUserRepository UserRepository {get;} 
IMeetingRepository MeetingRepository {get;}


IMeetingTypeRepository  MeetingTypeRepository {get;}
     Task<bool> SaveAsync();
}
}