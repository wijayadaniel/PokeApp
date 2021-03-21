import React from 'react';
import {ScrollView} from 'react-native';
import ActionButton from '../../atoms/button/action';
import PokemonCard from '../pokemon-card';

const PokemonList = ({pokemonList, onLoadMore}) => {
  const renderCard = (item, i) => {
    return <PokemonCard key={i} name={item.name} url={item.url} />;
  };

  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      {pokemonList.length > 0 ? pokemonList.map(renderCard) : null}
      <ActionButton title={'Load More'} onPress={onLoadMore} />
    </ScrollView>
  );
};

export default PokemonList;
