using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GameCorner.Repositories;
using GameCorner.Models;

namespace GameCorner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: UserController/1
        [HttpGet("{id}")]
        public IActionResult GetUserById(string id)
        {
            User user = _userRepository.GetUserById(id);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
