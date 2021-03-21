import {useState, useEffect} from 'react';
import axios from 'axios';

export default (URLs) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const fetchTypeResults = async () => {
    //Reset error on reload
    setError('');

    const promises = URLs.map((type_url) => {
      return axios.get(type_url).then(({data}) => {
        const damage_relations = {...data.damage_relations, name: data.name};
        return damage_relations;
      });
    });

    const resolvePromises = await Promise.all(promises)
      .then((values) => {
        return values;
      })
      .catch((error) => {
        console.log('error on get type', error);
        setError(error);
      });

    setResults(resolvePromises.flat());
  };

  useEffect(() => {
    fetchTypeResults();

    return () => {
      source.cancel();
    };
  }, []);

  return [results, error];
};
