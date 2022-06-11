using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GameCorner.Repositories;
using GameCorner.Models;
using Microsoft.AspNetCore.Authorization;

namespace GameCorner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepo;

        public UserController(IUserRepository userRepository)
        {
            _userRepo = userRepository;
        }

        // GET: UserController/1
        [HttpGet("{id}")]
        public IActionResult GetUserById(string id)
        {
            User user = _userRepo.GetUserById(id);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUser(User newUser)
        {
            if (newUser == null)
            {
                return NotFound();

            }
            else
            {
                _userRepo.AddUser(newUser);
                return Ok(newUser);
            }
        }

        [Authorize]
        [HttpGet("Auth")]
        public async Task<IActionResult> GetUserAuthStatus()
        {
            string userId = User.FindFirst(claim => claim.Type == "user_id").Value;
            bool userexists = _userRepo.checkUserCreatedInDB(userId);
            if (!userexists)
            {
                User userFromToken = new User()
                {

                    Id = userId,

                };

                _userRepo.AddUser(userFromToken);
                return Ok();
            }
            User existingUser = _userRepo.GetUserById(userId);
            return Ok(existingUser);
        }
    }
}
