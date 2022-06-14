import axios from "axios";

const baseURL = "https://localhost:7035/api"

const getGameById = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/Games/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

  const getGamesByUserId = (userId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/Games/User/${userId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const createGame = (newGameObj) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/Games`, newGameObj)
      .then((response) => {
        resolve(response.data.id);
      })
      .catch(reject);
  });

  const updateGame = (id, gameObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/Games/${id}`, gameObj)
      .then(() => getGamesByUserId(gameObj.userId).then(resolve))
      .catch(reject);
  });

  const deleteGame = (gameId, userId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/Games/${gameId}`)
      .then(() => getGamesByUserId(userId).then(resolve))
      .catch(reject);
  });

  const getPlatform = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/Games/Platform/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

  export {
      getGameById,
      getGamesByUserId,
      createGame,
      updateGame,
      deleteGame,
      getPlatform,
  }