using MeetingManagement.Models;

namespace MeetingManagement.Interfaces {


public interface IMeetingRepository
{

        public void AddMeeting(Meeting meeting);
   
         public void DeleteMeeting(int CityId);
   
        public  Task<Meeting> FindMeeting(int id);
      
        public  Task<IEnumerable<Meeting>> GetMeetingAsync();
    
 }
}