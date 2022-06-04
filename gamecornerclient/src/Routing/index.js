import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Games from "../Views/Games";
import GameDetails from "../Views/GameDetails";
import NewGame from "../Views/NewGame"
import Login from '../Views/Login';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path='/Games' element={<Games />} />
                <Route exact path="/Games/:key" element={<GameDetails />} />
                <Route exact path="/NewGame" element={<NewGame />} />
            </Routes>

        </div>
    )
}