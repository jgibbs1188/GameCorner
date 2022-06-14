import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameData';
import GameDetailsCard from '../Components/GameDetailsCard';


export default function GameDetails(){
    const [singleGame, setSingleGame] = useState({});
    const { key } = useParams();

    useEffect(() => {
        getGameById(key).then(setSingleGame)
    }, []);

    return (
        <div>
            <GameDetailsCard game={singleGame} />
        </div>
    )
}