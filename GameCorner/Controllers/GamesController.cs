using GameCorner.Models;
using GameCorner.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GameCorner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : Controller
    {
        private readonly IGamesRepository _gamesRepo;

        public GamesController(IGamesRepository gamesRepo)
        {
            _gamesRepo = gamesRepo;
        }
        [HttpGet("{id}")]
        public IActionResult GetGameById(int id)
        {
            var match = _gamesRepo.GetGameById(id);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        [HttpPost]
        public IActionResult CreateGame(Games newGames)
        {
            if (newGames == null)
            {
                return NotFound();
            }
            else
            {
                _gamesRepo.CreateGame(newGames);
                return Ok(newGames);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateGame(Games games)
        {
            int id = games.Id;
            var match = _gamesRepo.GetGameById(id);

            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _gamesRepo.UpdateGame(games);
                return Ok(games);
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _gamesRepo.DeleteGame(id);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetGamesByUserId(string userId)
        {
            var matches = _gamesRepo.GetGamesByUserId(userId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }

        [HttpGet("platform/{id}")]
        public IActionResult GetPlatform(int id)
        {
            var match = _gamesRepo.GetPlatform(id);
            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }
    }
}
