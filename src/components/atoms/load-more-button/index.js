import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {common} from '../../../helpers/common';

const LoadMoreButton = ({onLoadMore}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => onLoadMore()}>
      <Text style={styles.buttonText}>Load More</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    borderColor: '#3C98F0',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: moderateScale(12),
    marginBottom: moderateScale(16),
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: common.sizeFont.size5,
    marginHorizontal: moderateScale(4),
    padding: moderateScale(4),
  },
});

export default LoadMoreButton;
