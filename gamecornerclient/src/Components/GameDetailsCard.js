import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { deleteGame } from '../api/gameData';
// import getCurrentUsersUid from '../helpers/getCurrentUsersUid';
import { useNavigate } from 'react-router-dom';

export default function GameDetailsCard({ game, platform }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(game);
        console.log(platform);
    }, []);
  
    const handleClick = (method) => {
      console.log(method);
      if (method === "delete") {
        deleteGame(game.id).then(() => {
        navigate(`/Games`)});
      } 
      else if (method === "update") {
        navigate(`/NewGameForm/${game.id}`);
      }
    };

    return (
        <>
          <div className="gameDetailsCard" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className='card-text'>Rating: {game.rating}</p>
              {/* <p className='card-text'>Platform: {platform.name}</p> */}
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

GameDetailsCard.propTypes = {
    game: PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.number,
    platformId: PropTypes.number,
    userId: PropTypes.string,
    id: PropTypes.number,
  }),
    platform: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })
};

GameDetailsCard.defaultProps = {
    game: {},
    platform: {},
};
