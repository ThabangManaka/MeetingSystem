

using System.ComponentModel.DataAnnotations;

namespace MeetingManagement.Models {
    public class Meeting {

    
   public int MeetingId { get; set; }
 [Required]
   public string MeetingDescription { get; set; }
    public int MeetingTypeId { get; set; }
    public DateTime Date { get; set; }
}
}