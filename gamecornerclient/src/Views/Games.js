import React, { useEffect, useState } from "react";
import { getGamesByUserId } from "../api/gameData";
import GameCard from "../Components/GameCard";
import getCurrentUsersUid from "../helpers/getCurrentUsersUid";


export default function Games() {
  const [games, setGames] = useState([]);
  const userId = getCurrentUsersUid();

  useEffect(() => { 
    getGamesByUserId(userId).then((array) => {
        setGames(array);
        console.log(array);
        console.log(setGames);
    });
  }, [userId]);

  return (
    <>
      <div>
        <h1>Game Library</h1>
        {games ? (
          <>
            <div>
              {games?.map((game) => (
                <GameCard 
                key={game.id} 
                game={game} 
                setGames={setGames} />
              ))}
            </div>
          </>
        ) : (
          <h2>You should probably add some games to your library!</h2>
        )}
      </div>
    </>
  );
}