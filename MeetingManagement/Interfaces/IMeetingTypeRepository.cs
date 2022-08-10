
using MeetingManagement.Models;

namespace MeetingManagement.Interfaces {

    public interface   IMeetingTypeRepository {

    public Task<IEnumerable<MeetingType>> GetMeetingTypeAsync();
 
    public  Task<MeetingType> GetMeetingTypeIdAsync(int id);
    }
}