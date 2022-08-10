using MeetingManagement.Dto;
using MeetingManagement.Error;
using MeetingManagement.Helpers;
using MeetingManagement.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace MeetingManagement.Controllers{
 [Route("api/[controller]")]
    [ApiController]
    public class  UserController : BaseController {

       private readonly IUnitOfWork uow;
        private readonly IConfiguration configuration;
         private readonly AppSettings _appSettings;

     public UserController(IUnitOfWork uow, IConfiguration configuration, 
        IOptions<AppSettings> appSettings)
        {
            this.configuration = configuration;
            this.uow = uow;
            _appSettings = appSettings.Value;
        
        }
  [HttpGet ("get")]   
  public async Task<IActionResult> Get()
    {  
    var users =   await uow.UserRepository.GetAllUsers();
      return Ok(users);

     }

   [HttpPost ("add")] 
    public async Task<IActionResult> Register(UsersDto usersDto){
          ApiError apiError = new ApiError();
          uow.UserRepository.Register(usersDto);
          await uow.SaveAsync();
        return StatusCode(201);

    }

    }

}