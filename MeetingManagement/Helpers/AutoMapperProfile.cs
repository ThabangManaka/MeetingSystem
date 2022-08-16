
using AutoMapper;
using MeetingManagement.Dto;
using MeetingManagement.Models;

namespace MeetingManagement.Helpers{

    public class AutoMapperProfiles : Profile{

   public  AutoMapperProfiles() {
    
     CreateMap<MeetingType, MeetingTypeDto>().ReverseMap();

      CreateMap<Meeting, MeetingDto>().ReverseMap();

     CreateMap<MeetingItem, MeetingItemDto>().ReverseMap();

            CreateMap<MeetingType, MeetingTypeDto>()
           .ForMember(d => d.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(d => d.Name, opt => opt.MapFrom(src => src.Name));

              CreateMap<MeetingUpdateDto, Meeting>().ReverseMap();

           CreateMap<MeetingUpdateDto, Meeting>()
            .ForMember(d => d.MeetingDescription, opt => opt.MapFrom(src => src.MeetingDescription))
            .ForMember(d => d.Date, opt => opt.MapFrom(src => src.Date))
           .ForMember(d => d.MeetingTypeId, opt => opt.MapFrom(src => src.MeetingTypeId))
           .ForMember(d => d.Date, opt => opt.MapFrom(src => src.Date));
           
     // CreateMap<MeetingItem, MeetingItemDto>().ReverseMap();
         CreateMap<MeetingItem, MeetingItemDto>()
         .ForMember(d => d.ItemName, opt => opt.MapFrom(src => src.ItemName))
         .ForMember(d => d.Comments, opt => opt.MapFrom(src => src.Comments))
         .ForMember(d => d.Status, opt => opt.MapFrom(src => src.Status))
          .ForMember(d => d.MeetingId, opt => opt.MapFrom(src => src.MeetingId))
         .ForMember(d => d.Action, opt => opt.MapFrom(src => src.Action));

//       CreateMap<Property, PropertyListDto>()
//                 .ForMember(d => d.City, opt => opt.MapFrom(src => src.City.Name))
//                 .ForMember(d => d.Country, opt => opt.MapFrom(src => src.City.Country))
//                 .ForMember(d => d.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
//                 .ForMember(d => d.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name)); 

//  CreateMap<SchemeMasterEditViewModel, SchemeMaster>()
//                 .ForMember(dest => dest.SchemeName, opt => opt.MapFrom(src => src.SchemeName))
//                 .ForMember(dest => dest.SchemeID, opt => opt.MapFrom(src => src.SchemeID))
//                 .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status));

    }      
    }
}