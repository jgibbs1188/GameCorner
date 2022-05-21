using Microsoft.AspNetCore.Mvc;

namespace GameCorner.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
