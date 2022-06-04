import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse";
import { signOutUser } from "../api/auth/auth";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                    Game Corner
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">
                            Home
                        </a>
                        <a className="nav-link active" aria-current="page" href="/Games">
                            Games
                        </a>
                        <a className="nav-link active" aria-current="page" href="/NewGame">
                            New Game
                        </a>
                        <button className="btn btn-danger" onClick={signOutUser}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
