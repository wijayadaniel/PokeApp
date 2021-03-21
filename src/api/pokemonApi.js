import axiosInstance, {baseURL} from './axiosInstance';

const getPokemonList = (offset = 0, limit = 0) => {
  return axiosInstance.get(baseURL.pokeapi + '/pokemon/?limit=150');
};

export {getPokemonList};
