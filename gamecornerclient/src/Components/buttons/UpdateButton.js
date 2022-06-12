import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UpdateButton({ gameId }) {
    console.log(gameId);
  return (
    <Link to={`/NewGameForm/${gameId}`} className="btn-warning btn">
      <i className="fas fa-edit" />
      Update
    </Link>
  );
}

UpdateButton.propTypes = {
    gameId: PropTypes.number,
};

UpdateButton.defaultProps = {
    gameId: 0,
};
