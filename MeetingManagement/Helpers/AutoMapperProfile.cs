
using AutoMapper;
using MeetingManagement.Dto;
using MeetingManagement.Models;

namespace MeetingManagement.Helpers{

    public class AutoMapperProfiles : Profile{

   public  AutoMapperProfiles() {
    
     CreateMap<MeetingType, MeetingTypeDto>().ReverseMap();

      CreateMap<Meeting, MeetingDto>().ReverseMap();

//       CreateMap<Property, PropertyListDto>()
//                 .ForMember(d => d.City, opt => opt.MapFrom(src => src.City.Name))
//                 .ForMember(d => d.Country, opt => opt.MapFrom(src => src.City.Country))
//                 .ForMember(d => d.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
//                 .ForMember(d => d.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name)); 

    }      
    }
}