import axios from 'axios';

const baseURL = {
  pokeapi: 'https://pokeapi.co/api/v2/',
};

const axiosInstance = axios.create({
  baseURL: baseURL.pokeapi,
  timeout: 10000,
});

const handleRequestError = (error) => {
  // We could add response error handler here
  // like sending error detail to error reporting services such as sentry
  Promise.reject(error);
};

const handleResponseError = (error) => {
  // We could add response error handler here
  // like sending error detail to error reporting services such as sentry
  Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  handleResponseError,
);
axiosInstance.interceptors.request.use(
  (response) => response,
  handleRequestError,
);

export default axiosInstance;
export {baseURL};
