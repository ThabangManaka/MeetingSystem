using MeetingManagement.Dto;
using MeetingManagement.Models;

namespace MeetingManagement.Interfaces{

public interface IUserRepository{
public  Task<Users> Authenticate(string userName, string passwordText);

public  LoginResDto  GetUserDetailsbyCredentials(string FirstName);
public  void Register(UsersDto userDto );
public  Task<bool> UserAlreadyExists(string Email);
public Task<IEnumerable<Users>> GetAllUsers();
  }

}