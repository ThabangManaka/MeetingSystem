

using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace MeetingManagement.Controllers{

    public class BaseController: ControllerBase
    {
        protected int GetUserId() {
            return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }
    }
}