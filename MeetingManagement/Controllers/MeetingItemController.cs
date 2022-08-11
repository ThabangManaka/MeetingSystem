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

         return uow.MeetingItemRepository.GetMeetingTypeAsync(id);
        }

        [HttpPost("post")]
        public async Task<IActionResult> AddMeetingItem(MeetingItemDto meetingItemDto )
        {
            var meetingItem = mapper.Map<MeetingItem>(meetingItemDto );
            uow.MeetingItemRepository.AddMeetingItem(meetingItem);
            await uow.SaveAsync();
            return StatusCode(201);
        }
}
}