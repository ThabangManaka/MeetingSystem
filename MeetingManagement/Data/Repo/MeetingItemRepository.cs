using MeetingManagement.Dto;
using MeetingManagement.Models;

namespace MeetingManagement.Data.Repo{

    public class MeetingItemRepository : IMeetingItemRepository{

    private readonly DataContext dc;

    public MeetingItemRepository( DataContext dc)
    {
        this.dc = dc;
    }
   
         public void AddMeetingItem(MeetingItem meetingItem)
        {
            dc.MeetingItems.Add(meetingItem);             
        }
      public  List<MeetingItem> GetMeetingItemsByMeetingIdAsync(int meetingId)
       {

 var result1=   (from meeting in dc.Meetings.Where(x=> x.MeetingId == meetingId)
                            join  otherMeetings in dc.Meetings
                            on  meeting.MeetingTypeId equals otherMeetings.MeetingTypeId
                           
                            where meeting.Date >= otherMeetings.Date 
             select otherMeetings).ToList();

           var result =   (from meeting in dc.Meetings.Where(x=> x.MeetingId == meetingId)
                            join  otherMeetings in dc.Meetings
                            on  meeting.MeetingTypeId equals otherMeetings.MeetingTypeId
                            join  meetingItem  in  dc.MeetingItems
                            on otherMeetings.MeetingId equals meetingItem.MeetingId
                            where meeting.Date >= otherMeetings.Date 
             select meetingItem).ToList();

             return   result;
      }

  public async Task<IEnumerable<MeetingItem>>GetMeetingTypeAsyncc (int meetingItemId)
        {
              var result = (from meetinItem in dc.MeetingItems
             where meetinItem.MeetingItemId == meetingItemId
             select meetinItem);

             return   result;
           
           
       
        }

 public async Task<MeetingItem> FindMeetingItem(int id)
        {
            return await dc.MeetingItems.FindAsync(id);
        }
   public bool UpdateMeetingItemMaster(MeetingItem meetingItem)
        {
            dc.Entry(meetingItem).Property(x => x.Status).IsModified = true;
            var result = dc.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<MeetingItem> GetMeetingTypeAsync(int meetingItemId)
        {
            throw new NotImplementedException();
        }
    }
}