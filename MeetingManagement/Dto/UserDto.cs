

using System.ComponentModel.DataAnnotations;

namespace MeetingManagement.Dto {

       public class UsersDto
    {
      
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Contactno { get; set; }
        [Required]
        public string Password { get; set; }

        public string PasswordKey { get; set; }

        public DateTime? CreatedDate { get; set; }
        public bool Status { get; set; }
    }   
    }