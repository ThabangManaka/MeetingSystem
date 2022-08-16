using System.ComponentModel.DataAnnotations;

namespace MeetingManagement.Dto{

    public class MeetingDto {
  
      [Required]
        public int MeetingId { get; set; }
   public string MeetingDescription { get; set; }
    public int MeetingTypeId { get; set; }
    public DateTime Date { get; set; }
    }


    public class MeetingUpdateDto {
      [Required]
   public string MeetingDescription { get; set; }
    public int MeetingTypeId { get; set; }
    public DateTime Date { get; set; }
    }
}