import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route exact path="/Home" element={<Games />}></Route>
                <Route exact path="/Games" element={<Games />}></Route>
                <Route exact path="/Games/:key" element={<GameDetails />} />
                <Route exact path="/NewGame" element={<NewGameForm />} />
            </Routes>

        </div>
    )


}