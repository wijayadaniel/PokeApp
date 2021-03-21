import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import placeholder from '../../../../assets/img/placeholder.png';

const DetailImages = ({sprites}) => {
  const renderImages = (type) => {
    if (type === 'front_default') {
      if (sprites.front_default)
        return (
          <Image
            source={{uri: sprites.front_default}}
            style={styles.DetailImage}
          />
        );
      if (sprites.versions['generation-viii'].icons.front_default)
        return (
          <Image
            source={{
              uri: sprites.versions['generation-viii'].icons.front_default,
            }}
            style={styles.DetailIcons}
          />
        );
      return <Image source={placeholder} />;
    }

    if (type === 'front_shiny') {
      if (sprites.front_shiny)
        return (
          <Image
            style={styles.DetailImage}
            source={{uri: sprites.front_shiny}}
          />
        );
      if (sprites.versions['generation-viii'].icons.front_shiny)
        return (
          <Image
            source={{
              uri: sprites.versions['generation-viii'].icons.front_default,
            }}
            style={styles.DetailIcons}
          />
        );
      return null;
    }
  };

  return (
    <View style={styles.ImageContainer}>
      {renderImages('front_default')}
      {renderImages('front_shiny')}
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginVertical: moderateScale(20),
    marginTop: moderateScale(20),
  },
  DetailImage: {
    resizeMode: 'contain',
    width: moderateScale(80),
    height: moderateScale(100),
  },
  DetailIcons: {
    resizeMode: 'contain',
    width: moderateScale(80),
    height: moderateScale(80),
  },
});

export default DetailImages;
