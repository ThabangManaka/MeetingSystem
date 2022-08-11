using MeetingManagement.Models;

namespace  MeetingManagement {

    public interface IMeetingItemRepository {

     public List<MeetingItem> GetMeetingTypeAsync(int meetingItemId);
    }
}