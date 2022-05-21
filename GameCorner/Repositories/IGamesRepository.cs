﻿using GameCorner.Models;

namespace GameCorner.Repos
{
    public interface IGamesRepository
    {
        Games GetGameById(int Id);

        void CreateGame(Games games);
        void UpdateGame(Games games);
        void DeleteGame(int id);
        List<Games> GetGamesByUserId(string UserId);
    }
}
