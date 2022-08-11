using AutoMapper;
using MeetingManagement.Dto;
using MeetingManagement.Interfaces;
using MeetingManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace MeetingManagement.Controllers{
  [Route("api/[controller]")]
  [ApiController]
    public class MeetingController : Controller {

      private readonly IUnitOfWork uow;
      

        private readonly IMapper mapper;
        public MeetingController(IUnitOfWork uow, IMapper mapper){
             this.uow = uow;
            this.mapper = mapper;
         }

          [HttpGet ("get")]  
       public async Task<IActionResult> GetMeeting()
        {            
            var meetings = await uow.MeetingRepository.GetMeetingAsync();

            var meetingTypeDto = mapper.Map<IEnumerable<MeetingDto>>(meetings);
            return Ok(meetingTypeDto);
        }
            [HttpPost("post")]
        public async Task<IActionResult> AddMeeting(MeetingDto meetingDto )
        {
            var meeting = mapper.Map<Meeting>(meetingDto );
            //city.LastUpdatedBy = 1;
            //city.LastUpdatedOn = DateTime.Now;
            uow.MeetingRepository.AddMeeting(meeting);
            await uow.SaveAsync();
            return StatusCode(201);
        }
                [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateMeeting(int id, MeetingDto meetingDto )
        {
            // if(id != meetingDto.MeetingId)
            //     return BadRequest("Update not allowed");

            var meetingFromDb = await uow.MeetingRepository.FindMeeting(id);

            if (meetingFromDb == null)
                return BadRequest("Update not allowed");
            
    
            mapper.Map(meetingDto, meetingFromDb);
        
            await uow.SaveAsync();
            return StatusCode(200);
        }


    }
}