using MeetingManagement.Interfaces;
using MeetingManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Data.Repo{

public class MeetingTypeRepository : IMeetingTypeRepository {


     private readonly DataContext dc;

  public MeetingTypeRepository(DataContext dc)
  {
        this.dc = dc;
    
  }

          public async Task<IEnumerable<MeetingType>> GetMeetingTypeAsync()
        {
            return await dc.MeetingTypes.ToListAsync();
        }

            public async Task<MeetingType> GetMeetingTypeIdAsync(int id)
        {
            var properties = await dc.MeetingTypes
            .Where(p => p.MeetingTypeId == id)
            .FirstAsync();

            return properties;
        }

}
}