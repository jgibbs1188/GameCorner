import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameData';
import GameDetailsCard from '../Components/GameDetailsCard';


export default function GameDetails(){
    const [singleGame, setSingleGame] = useState({});
    const { key } = useParams();
//     const [platform, setPlatform] = useState({});

    useEffect(() => {
        getGameById(key).then(setSingleGame);
        // getPlatform(singleGame.platformId).then(setPlatform);
    }, []);

    

    return (
        <div>
            <GameDetailsCard game={singleGame} />
        </div>
    )
}