import {useState, useEffect} from 'react';
import axios from 'axios';
import axiosInstance from './axiosInstance';

export default (url) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const fetchPokemonResults = async (source) => {
    //reset error on reload of results
    setError('');

    return await axiosInstance
      .get(url, {cancelToken: source.token})
      .then((response) => {
        // console.log('URL', url, response.data.types);
        setResults(response.data);
      })
      .catch((err) => {
        console.log('err on get types', err);
      });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchPokemonResults(source);
    return () => {
      source.cancel();
    };
  }, []);

  return [results, error];
};
