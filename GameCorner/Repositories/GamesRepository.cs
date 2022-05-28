using GameCorner.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace GameCorner.Repositories
{
    public class GamesRepository : IGamesRepository
    {
        private readonly IConfiguration _config;

        public GamesRepository(IConfiguration config)
        {
            _config = config;
        }
        
        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));

            }
        }

        public Games GetGameById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT
                                            Id, UserId, Title, Rating, PlatformId
                                       FROM Games
                                       WHERE Id = @Id
                                       ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Games games = new Games()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Rating = reader.GetInt32(reader.GetOrdinal("Rating")),
                            PlatformId = reader.GetInt32(reader.GetOrdinal("PlatformId")),
                        };

                        reader.Close();
                        return games;
                    }
                    reader.Close();
                    return null;
                }
            }
        }

        public void CreateGame(Games games)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       INSERT INTO Games
                                        (UserId, Title, Rating, PlatformId)
                                       OUTPUT INSERTED.ID
                                       VALUES (@userId, @title, @rating, @platformId)
                                       ";

                    cmd.Parameters.AddWithValue("@userId", games.UserId);
                    cmd.Parameters.AddWithValue("@title", games.Title);
                    cmd.Parameters.AddWithValue("@rating", games.Rating);
                    cmd.Parameters.AddWithValue("@platformId", games.PlatformId);

                    int id = (int)cmd.ExecuteScalar();

                    games.Id = id;
                }
            }
        }

        public void UpdateGame(Games games)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Games
                                        SET
                                            UserId = @userId,
                                            Title = @title,
                                            Rating = @rating,
                                            PlatformId = @platformId
                                        WHERE Id = @id;
                                       ";

                    cmd.Parameters.AddWithValue("@id", games.Id);
                    cmd.Parameters.AddWithValue("@userId", games.UserId);
                    cmd.Parameters.AddWithValue("@title", games.Title);
                    cmd.Parameters.AddWithValue("@rating", games.Rating);
                    cmd.Parameters.AddWithValue("@platformId", games.PlatformId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteGame(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM Games
                                        Where Id = @id
                                       ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteReader();
                }
            }
        }

        public List <Games> GetGamesByUserId(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, UserId, Title, Rating, PlatformId
                                        FROM Games
                                        WHERE UserId = @userId
                                       ";

                    cmd.Parameters.AddWithValue("userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Games> games = new List<Games>();
                    while (reader.Read())
                    {
                        Games game = new Games()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetString(reader.GetOrdinal("UserId")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Rating = reader.GetInt32(reader.GetOrdinal("Rating")),
                            PlatformId = reader.GetInt32(reader.GetOrdinal("PlatformId")),
                        };
                        games.Add(game);
                    }
                    reader.Close();
                    return games;
                };
            }
        }

        public Platform GetPlatform(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                           Id, Name 
                                        FROM Platforms
                                        WHERE Id = @id
                                       ";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Platform platform = new Platform()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                        };

                        reader.Close();
                        return platform;
                    }
                    reader.Close();
                    return null;
                }
            }
        }
    }
}
