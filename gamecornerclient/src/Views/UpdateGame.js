import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameData';
import NewGameForm from '../Components/NewGameForm';

export default function UpdateGame() {
    const [updateGame, setUpdateGame] = useState({});
    const { key } = useParams();

useEffect(() => {
  
    getGameById(key).then((response)=> setUpdateGame(response));
    console.log(updateGame);
}, [])

  return (
    <div>
        <NewGameForm obj={updateGame} />
    </div>
  )
}