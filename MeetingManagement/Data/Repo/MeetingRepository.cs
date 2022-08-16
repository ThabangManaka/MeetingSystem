using MeetingManagement.Interfaces;
using MeetingManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Data{

public class MeetingRepository : IMeetingRepository {
     private readonly DataContext dc;

     public MeetingRepository(DataContext dc)
     {
        this.dc = dc;
     }

     


         public void AddMeeting(Meeting meeting)
        {
            dc.Meetings.Add(meeting);             
        }

            public void DeleteMeeting(int CityId)
        {
            var meeting = dc.Meetings.Find(CityId);
            dc.Meetings.Remove(meeting);
        }

        public async Task<Meeting> FindMeeting(int id)
        {
            return await dc.Meetings.FindAsync(id);
        }

        public async Task<IEnumerable<Meeting>> GetMeetingAsync()
        {
            return await dc.Meetings.ToListAsync();
        }

       public bool UpdateMeeting(Meeting meeting)
        {
     
            dc.Entry(meeting).Property(x => x.MeetingDescription).IsModified = true;
            var result =dc.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

}


}