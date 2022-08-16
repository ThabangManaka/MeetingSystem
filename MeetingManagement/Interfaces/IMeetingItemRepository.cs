using MeetingManagement.Models;

namespace  MeetingManagement {

    public interface IMeetingItemRepository {

     public List<MeetingItem> GetMeetingTypeAsync(int meetingItemId);
       public void AddMeetingItem(MeetingItem meetingItem);

       public  Task<MeetingItem> FindMeetingItem(int id);

        public bool UpdateMeetingItemMaster(MeetingItem meetingItem);

          public List<MeetingItem> GetMeetingItemsByMeetingIdAsync(int meetingId);
    }
}