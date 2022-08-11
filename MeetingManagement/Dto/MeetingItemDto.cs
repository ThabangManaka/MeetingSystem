namespace MeetingManagement.Dto {


    public class MeetingItemDto{
     public int MeetingItemId { get; set; }
    public string ItemName { get; set; }
    public string Comments { get; set; }
    public string Status { get; set; }
    public string Action { get; set; }
     public int MeetingId { get; set; }
    }
}