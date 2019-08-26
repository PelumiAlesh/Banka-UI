import axios from 'axios';

export default (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    return axios.defaults.headers.common.Authorization;
  }
  return delete axios.defaults.headers.common.Authorization;
};
