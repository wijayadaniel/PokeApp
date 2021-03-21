import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import typeColor, {common} from '../../../helpers/common';

const PokemonType = ({
  types,
  details_flag = 0,
  damage_flag = 0,
  moves_flag = 0,
}) => {
  const TypeColor = (type) => {
    if (damage_flag) return {backgroundColor: typeColor(type)};
    return {backgroundColor: typeColor(type.name)};
  };
  const determineDirection = () => {
    if (details_flag || damage_flag) return {flexDirection: 'row'};
    return {flexDirection: 'column'};
  };

  const renderPokemonType = (pokemonType, index) => {
    return (
      <View
        key={index}
        style={[
          TypeColor(pokemonType),
          damage_flag
            ? typeBorder(16)
            : moves_flag
            ? typeBorder(18)
            : typeBorder(24),
        ]}>
        <Text style={styles.typeText}>
          {damage_flag ? pokemonType : pokemonType.name}
        </Text>
      </View>
    );
  };
  return (
    <View style={[styles.typeContainer, determineDirection()]}>
      {types
        ? types.map((type, index) => {
            return renderPokemonType(
              damage_flag ? type : moves_flag ? type : type.type,
              index,
            );
          })
        : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  typeText: {
    color: 'white',
    paddingHorizontal: scale(4),
    fontSize: common.sizeFont.size5,
    textAlign: 'center',
  },
});

const typeBorder = (size) => {
  return {
    borderRadius: scale(4),
    borderWidth: 2,
    margin: 1,
    minWidth: scale(size),
  };
};

export default PokemonType;
