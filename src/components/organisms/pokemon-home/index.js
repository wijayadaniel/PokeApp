import React, {useState} from 'react';
import {View} from 'react-native';
import EmptyBackgroundData from '../../atoms/empty-background';
import Search from '../../atoms/search-bar';
import PokemonList from '../../molecules/pokemon-list';
import Fuse from 'fuse.js';

const PokemonHome = ({pokemonList}) => {
  const [term, setTerm] = useState('');
  const [index, setIndex] = useState(20);
  const [pokeList, setPokeList] = useState(pokemonList.slice(0, index));
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const searchFilter = (newTerm) => {
    const searchFilterResults = [...pokemonList.slice(0, index)];
    if (newTerm.length === 0) setSearching(false);
    else searching ? null : setSearching(true);

    searchError ? setSearchError(false) : null;
    setTerm(newTerm);

    if (newTerm.length <= 1) {
      const newSearchResults = searchFilterResults.filter((item) => {
        const name = `${item.name.toLowerCase()}`;
        const searchTerm = newTerm.toLowerCase();

        return name.indexOf(searchTerm) > -1;
      });

      if (newSearchResults) setPokeList(newSearchResults);
    } else {
      newTerm = newTerm.replace(/^\s+|\s+$/gm, '').toLowerCase();

      const options = {
        shouldSort: true,
        threshold: 0.25,
        keys: ['name'],
      };

      const fuse = new Fuse(pokemonList, options);
      const fuseFilterResults = fuse.search(newTerm);

      if (fuseFilterResults.length) {
        const newFilterResults = fuseFilterResults.reduce((acc, curr) => {
          const entry = {name: curr.item.name, url: curr.item.url};
          return acc.concat(entry);
        }, []);
        setPokeList(newFilterResults);
      } else {
        setSearchError(true);
      }
    }
  };

  const loadMore = () => {
    const newIndex = index + 20;
    let newResultList = [...pokemonList.slice(0, index)];

    if (newIndex >= pokemonList.length) return;

    for (let i = index + 1; i < newIndex; i++) {
      newResultList.push(pokemonList[i]);
    }

    setIndex(newIndex);
    setPokeList(newResultList);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Search
        defaultValue={term}
        placeholder={'Search pokemon'}
        onSearch={(text) => searchFilter(text)}
      />
      {searchError ? (
        <EmptyBackgroundData
          titleText={'Ooppss...'}
          subTitleText={'Pokemon does not exist, please try again.'}
        />
      ) : (
        <PokemonList pokemonList={pokeList} onLoadMore={loadMore} />
      )}
    </View>
  );
};

export default PokemonHome;
