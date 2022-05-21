using Microsoft.AspNetCore.Mvc;

namespace GameCorner.Controllers
{
    public class GamesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
