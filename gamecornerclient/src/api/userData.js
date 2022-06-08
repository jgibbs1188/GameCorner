import axios from "axios";

const baseURL = "https://localhost:7035/api";

const getUserById = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/user/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

  export default getUserById;