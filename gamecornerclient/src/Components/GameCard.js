import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteGame, getGamesByUserId } from "../api/gameData";
import getCurrentUsersUid from "../helpers/getCurrentUsersUid";

export default function GameCard({ game, setGames }) {
  const userId = getCurrentUsersUid();
  const navigate = useNavigate();

  const handleClick = (method) => {
    console.log(method);
    if (method === "delete") {
      deleteGame(game.id).then(() => {
      getGamesByUserId(userId).then(setGames)})
    } 
    else if (method === "update") {
      navigate(`/NewGameForm/${game.id}`);
    } 
    else if (method === "details") {
        navigate(`/Games/${game.id}`);
    }
  };


  return (
    <>
      <div className="gameCard" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <button type="button" className="btn btn-info" onClick = {() => handleClick("details")}>
            Info
          </button>
          <button type="button" className="btn btn-outline-success" onClick={() => handleClick("update")}>
            Update
          </button>
          <button type="button" className="btn btn-danger" onClick={() => handleClick("delete")}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

GameCard.propTypes = {
    game: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.string,
    rating: PropTypes.number,
    platformId: PropTypes.number
  }),
  setGames: PropTypes.func,
};