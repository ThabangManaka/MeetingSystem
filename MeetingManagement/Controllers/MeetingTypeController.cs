using AutoMapper;
using MeetingManagement.Dto;
using MeetingManagement.Helpers;
using MeetingManagement.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace MeetingManagement.Controllers {


  [Route("api/[controller]")]
  [ApiController]
    public class MeetingTypeController : Controller{
        private readonly IUnitOfWork uow;
      

        private readonly IMapper mapper;

        public MeetingTypeController(IUnitOfWork uow, IMapper mapper){
             this.uow = uow;
            this.mapper = mapper;
            }

               // GET api/city
        [HttpGet ("get")]       
      public async Task<IActionResult> GetMeetingTypes()
        {            
            var meetingTypes = await uow.MeetingTypeRepository.GetMeetingTypeAsync();

            var meetingTypeDto = mapper.Map<IEnumerable<MeetingTypeDto>>(meetingTypes);
            return Ok(meetingTypes);
        }
    }
}