using System.Net;
using AutoMapper;
using MeetingManagement.Dto;
using MeetingManagement.Interfaces;
using MeetingManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace MeetingManagement.Controllers {

  [Route("api/[controller]")]
  [ApiController]
public  class MeetingItemController :  Controller{
         private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
public MeetingItemController(IUnitOfWork uow, IMapper mapper){
             this.uow = uow;
            this.mapper = mapper;
     }
   [HttpGet("get/{id}")]
        public  List<MeetingItem> GetMeetingItemById(int id)
        {

         return uow.MeetingItemRepository.GetMeetingItemsByMeetingIdAsync(id);
        }

        [HttpPost("post")]
        public async Task<IActionResult> AddMeetingItem(MeetingItem meetingItemDto )
        {
          
            uow.MeetingItemRepository.AddMeetingItem(meetingItemDto );
            await uow.SaveAsync();
            return StatusCode(201);
        }

           [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateMeetingItem(int id, MeetingItemDto meetingItemDto )
        {
    
            var meetingFromDb = await uow.MeetingItemRepository.FindMeetingItem(id);

            if (meetingFromDb == null)
                return BadRequest("Update not allowed");
            
    
            mapper.Map(meetingItemDto, meetingFromDb);
        
            await uow.SaveAsync();
            return StatusCode(200);
        }

     
        
}
}