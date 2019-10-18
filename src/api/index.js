import axios from 'axios';

const instance = axios.create({
  url: '/api',
});

export default instance;
