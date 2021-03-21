import React from 'react';
import {ScrollView} from 'react-native';
import LoadMoreButton from '../../atoms/load-more-button';
import PokemonCard from '../pokemon-card';

const PokemonList = ({pokemonList, onLoadMore}) => {
  const renderCard = (item) => {
    return <PokemonCard name={item.name} url={item.url} />;
  };

  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      {pokemonList.length > 0 ? pokemonList.map(renderCard) : null}
      <LoadMoreButton onLoadMore={onLoadMore} />
    </ScrollView>
  );
};

export default PokemonList;
