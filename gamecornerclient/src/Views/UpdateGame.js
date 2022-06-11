import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameData';

export default function UpdateGame() {
    const [updateGame, setUpdateGame] = useState();
    const { key } = useParams();

useEffect(() => {
    getGameById(key).then((response)=> setUpdateGame(response));
}, [key])

  return (
    <div>
        <setUpdateGame obj={updateGame} />
    </div>
  )
}