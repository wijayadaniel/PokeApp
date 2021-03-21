import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import placeholder from '../../../../assets/img/placeholder.png';

const PokemonImageCard = ({sprites}) => {
  const renderImage = () => {
    if (sprites) {
      if (sprites.front_default)
        return (
          <View style={styles.ImageContainer}>
            <Image
              source={{uri: sprites.front_default}}
              style={styles.placeholderImage}
            />
          </View>
        );
      if (sprites.versions['generation-viii'].icons.front_default)
        return (
          <View style={styles.ImageContainer}>
            <Image
              source={{
                uri: sprites.versions['generation-viii'].icons.front_default,
              }}
              style={styles.placeholderImage}
            />
          </View>
        );
    }
    return (
      <View style={styles.ImageContainer}>
        <Image source={placeholder} style={styles.placeholderImage} />
      </View>
    );
  };
  return renderImage();
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: scale(80),
    width: scale(100),
  },
  placeholderImage: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    marginRight: scale(8),
  },
});

export default PokemonImageCard;
