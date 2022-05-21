using GameCorner.Models;

namespace GameCorner.Repos
{
    public interface IUserRepository
    {
        User GetUserById(string id);
    }
}
