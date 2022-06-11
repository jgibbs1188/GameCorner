import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Games from "../Views/Games";
import GameDetails from "../Views/GameDetails";
import NewGameForm from "../Components/NewGameForm"
import Login from '../Views/Login';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path='/Games' element={<Games />} />
                <Route exact path="/Games/:key" element={<GameDetails />} />
                <Route exact path="/NewGameForm" element={<NewGameForm />} />
                <Route exact path="/NewGameForm/:id" element={<NewGameForm />} />
            </Routes>

        </div>
    )
}