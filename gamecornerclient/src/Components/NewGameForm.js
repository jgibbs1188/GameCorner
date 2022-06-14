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


function NewGameForm({ obj = {} }) {
  const currentUserId = getCurrentUsersUid();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    ...initialGameState,
  });

  const game = useParams();

  useEffect(() => {
    console.log(obj);
    if (obj.id) {
      setFormInput({
        title: obj.title,
        rating: obj.rating,
        platformId: obj.platformId,
        userId: currentUserId,
      });
      console.log(game.title);
    }
  }, [currentUserId, obj]);

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
    if (obj.id) {
      updateGame(obj.id, { ...formInput, userId: currentUserId, id: obj.id }).then(() => {
        resetForm();
        navigate(`/Games`);
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
      <h1>{obj.id ? 'Edit' : 'Save'} Your New Game</h1>
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
        {obj.id ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

NewGameForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    platformId: PropTypes.number,
    userId: PropTypes.string,
  })
};

NewGameForm.defaultProps = {
  obj: {},
};

export default NewGameForm;
