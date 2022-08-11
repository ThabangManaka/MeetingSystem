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
      public List<MeetingItem> GetMeetingTypeAsync(int meetingItemId) {
           var result = (from meetinItem in dc.MeetingItems
             where meetinItem.MeetingItemId == meetingItemId
             select meetinItem).ToList();

             return result;
      }
    }
}