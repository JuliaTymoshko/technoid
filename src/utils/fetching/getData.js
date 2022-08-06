import axios from 'axios';

export const getDataFromJSONserver = (whatToGet) => {
  const URL = `http://localhost:8000/${whatToGet}`;

  return axios.get(URL).then((data) => {
    return data.data;
  });
};
