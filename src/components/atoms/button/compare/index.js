import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {scale} from 'react-native-size-matters';

const CompareButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('Compare')}>
      <Image
        source={require('../../../../../assets/img/select-compare.png')}
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: scale(4),
    marginRight: scale(16),
  },
  buttonIcon: {
    height: scale(24),
    width: scale(24),
  },
});

export default CompareButton;
