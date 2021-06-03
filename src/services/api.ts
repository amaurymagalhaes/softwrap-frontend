import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://softwrap-backend.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': true,
  },
});

export default Api;
