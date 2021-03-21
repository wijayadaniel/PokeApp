import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {getPokemonList} from '../api/pokemonApi';
import Loading from '../components/atoms/loading';
import PokemonHome from '../components/organisms/pokemon-home';

const Main = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    getPokemonList()
      .then((resp) => {
        setPokemonList(resp.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  };

  const renderPokemonList = () => {
    if (isLoading) return <Loading />;

    return <PokemonHome pokemonList={pokemonList} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {renderPokemonList()}
    </SafeAreaView>
  );
};

export default Main;
