import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getCurrentUsersUid from '../helpers/getCurrentUsersUid';
import { createGame, updateGame } from '../api/gameData';
import { useNavigate, useParams } from 'react-router-dom';

const initialGameState = {
  id: 0,
  title: '',
  rating: 0,
  platformId: 0,
  userId: '',
};

function NewGameForm() {
  const currentUserId = getCurrentUsersUid();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    ...initialGameState,
  });

  const game = useParams();

  useEffect(() => {
    console.log(game.id);
    if (game.id) {
      setFormInput({
        title: game.title,
        rating: game.rating,
        platformId: game.platformId,
        userId: currentUserId,
      });
      console.log(game.title);
    }
  }, [game, currentUserId]);

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
      updateGame(...formInput).then(() => {
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
    <form onSubmit={() => handleSubmit}>
      <h1>{game.id ? 'Edit' : 'Save'} Your Game</h1>
      <div>
        <input
          className="form-control input"
          type="text"
          name="title"
          id="title"
          value={game.title || ""}
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
          value={game.rating || ""}
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
          value={game.platformId || ""}
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
