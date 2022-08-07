import axios from 'axios';

export const getDataFromJSONserver = (whatToGet) => {
  const URL = `http://localhost:8000/${whatToGet}`;

  return axios.get(URL).then((data) => {
    return data.data;
  });
};

// Possible endpoints in JSON server:
// http://localhost:8000/cards
// http://localhost:8000/swipercards
// http://localhost:8000/users
// http://localhost:8000/technologies
