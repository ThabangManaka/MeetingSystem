namespace MeetingManagement.Data.Repo{

    public class MeetingItemRepository{

    private readonly DataContext dc;

    public MeetingItemRepository( DataContext dc)
    {
        this.dc = dc;
    }
   
        //  public async Task<IEnumerable<MeetingItem>> GetMeetingAsync()
        // {
        //     return await dc.Meetings.ToListAsync();
        // }

    }
}