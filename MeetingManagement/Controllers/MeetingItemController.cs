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
          //  var meetingItem=  uow.MeetingItemRepository.GetMeetingTypeAsync(id);
         //var meetingTypeDto = mapper.Map<IEnumerable<MeetingItemDto>>(meetingItem);
         // return (meetingTypeDto);

         return uow.MeetingItemRepository.GetMeetingTypeAsync(id);
        }
}
}