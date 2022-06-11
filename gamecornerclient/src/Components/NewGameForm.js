import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getCurrentUsersUid from '../helpers/getCurrentUsersUid';
import { createGame, updateGame } from '../api/gameData';
import { useNavigate } from 'react-router-dom';

const initialGameState = {
  id: 0,
  title: '',
  rating: 0,
  platformId: 0,
  userId: '',
};

function NewGameForm({ game = {} }) {
  const currentUserId = getCurrentUsersUid();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState(initialGameState);

  useEffect(() => {
    if (game.id) {
      setFormInput({
        gameTitle: game.title,
        gameRating: game.rating,
        gamePlatform: game.platformId,
        userId: currentUserId,
      });
    }
  }, [currentUserId, game]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialGameState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game.id) {
      updateGame(formInput).then(() => {
        resetForm();
        navigate(`/Games/${game.id}`);
      });
    } else {
      createGame({
        ...formInput,
        userId: currentUserId,
      }).then(() => {
        resetForm();
        navigate('/Games');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{game.id ? 'Edit' : 'Save'} Your New Game</h1>
      <div>
        <input
          className="form-control input"
          type="text"
          name="title"
          id="title"
          value={formInput.title || ""}
          onChange={handleChange}
          placeholder="TITLE"
        />
      </div>
      <div>
        <input
          className="form-control input"
          type="text"
          name="rating"
          id="rating"
          value={formInput.rating || ""}
          onChange={handleChange}
          placeholder="RATING"
        />
      </div>
      <div>
        <input
          className="form-control input"
          type="text"
          name="platformId"
          id="platformId"
          value={formInput.platformId || ""}
          onChange={handleChange}
          placeholder="PLATFORM"
        />
      </div>
      <button className="btn btn-success" type="submit">
        {game.id ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

NewGameForm.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    platformId: PropTypes.number,
    userId: PropTypes.string,
  })
};

NewGameForm.defaultProps = {
  game: {},
};

export default NewGameForm;
