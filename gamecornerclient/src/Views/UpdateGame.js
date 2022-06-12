import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameData';
import NewGameForm from '../Components/NewGameForm';

export default function UpdateGame() {
    const [updateGame, setUpdateGame] = useState({});
    const { gameId } = useParams();

useEffect(() => {
    console.log(gameId);
    getGameById(gameId).then((gameObj)=> setUpdateGame(gameObj));
}, [gameId])

console.log(updateGame);

  return (
    <div>
        <NewGameForm game={updateGame} />
    </div>
  )
}