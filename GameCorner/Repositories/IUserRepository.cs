using GameCorner.Models;

namespace GameCorner.Repositories
{
    public interface IUserRepository
    {
        User GetUserById(string id);
        void AddUser(User user);
        public bool checkUserCreatedInDB(string id);
    }
}
