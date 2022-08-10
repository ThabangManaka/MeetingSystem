
using System.Security.Cryptography;
using MeetingManagement.Data;
using MeetingManagement.Dto;
using MeetingManagement.Interfaces;
using MeetingManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Repo {


    public class UserRepository: IUserRepository{
     private readonly DataContext dc;
        public UserRepository(DataContext dc)
        {
            this.dc =dc;
        }

    public async Task<Users> Authenticate(string userName, string passwordText){

        var user = await dc.Users.FirstOrDefaultAsync(x => x.FirstName ==userName );

        if(user == null || user.PasswordKey == null )
          return null;

        if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
        return null;

        return user;
      
      }
    private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
        {
            using (var hmac = new HMACSHA512(passwordKey))
            {
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));

                for (int i=0; i<passwordHash.Length; i++)
                {
                    if (passwordHash[i] != password[i])
                        return false;
                }

                return true;
            }            
        }
          public  LoginResDto  GetUserDetailsbyCredentials(string FirstName){


            try {
                 var result = (from user in dc.Users
                        where user.FirstName == FirstName
                         select new LoginResDto {
                        
                         FirstName= user.FirstName,
                         LastName = user.LastName
     
                    }).SingleOrDefault();
                
                return result;     
            }
            catch (Exception){
                throw;
            }
        }


    public  void Register(UsersDto userDto ) {
      byte[] passwordHash, passwordKey;
        using (var hmac = new  HMACSHA512()){
            passwordKey = hmac.Key;
             passwordHash =  hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(userDto.Password));
        }
        
        Users user = new Users();
        //var userId = this.User.FindFirstValue(ClaimTypes.Name);
        user.FirstName = userDto.FirstName;
        user.LastName  =  userDto.LastName;
        user.Email = userDto.Email;
        user.Contactno = userDto.Contactno;
        user.Password =  passwordHash;
        user.PasswordKey = passwordKey;
        user.CreatedDate = DateTime.Now;
        //user.Createdby  = Convert.ToInt32(userId);


         dc.Users.Add(user);

    }
    public async Task<bool> UserAlreadyExists(string Email)
      {
           return await dc.Users.AnyAsync(x => x.Email == Email);
       }

      public async Task<IEnumerable<Users>> GetAllUsers()
        {
            return await dc.Users.ToListAsync();
        }
    }
    
}