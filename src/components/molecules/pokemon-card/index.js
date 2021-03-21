import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {capitalize, common} from '../../../helpers/common';
import EmptyBackgroundData from '../../atoms/empty-background';
import PokemonImageCard from '../../atoms/pokemon-image-card';
import PokemonType from '../../atoms/pokemon-type';
import useSearch from '../../../api/pokemonDetail';
import {useNavigation} from '@react-navigation/core';

const PokemonCard = ({name, url}) => {
  const [dataDetail, error] = useSearch(url);
  const navigation = useNavigation();

  const renderCardList = () => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate('Details', {
            name: capitalize(name),
            pokemonDetail: dataDetail,
          })
        }>
        <PokemonImageCard sprites={dataDetail.sprites} />
        <View style={styles.pokemonCardContainerText}>
          <Text style={styles.nameText}>{capitalize(name)}</Text>
        </View>
        <View style={styles.typeContainer}>
          <PokemonType types={dataDetail.types} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderPokemonCard = () => {
    if (error) return null;
    if (dataDetail) {
      return (
        <View style={styles.pokemonCardContainer}>
          {dataDetail ? (
            renderCardList()
          ) : (
            <EmptyBackgroundData subTitleText={'nothing to be show'} />
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return renderPokemonCard();
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  typeContainer: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
  pokemonCardContainer: {
    flex: 1,
    borderRadius: scale(6),
    borderWidth: 2.5,
    borderColor: '#202032',
    marginHorizontal: scale(6),
    marginVertical: scale(4),
    padding: scale(6),
    justifyContent: 'center',
  },
  pokemonCardContent: {
    flex: 1,
    flexDirection: 'row',
  },
  pokemonCardContainerText: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },
  nameText: {
    textAlign: 'center',
    fontSize: common.sizeFont.size2,
  },
});

export default PokemonCard;
