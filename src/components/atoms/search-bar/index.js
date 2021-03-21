import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const Search = ({defaultValue, placeholder, onSearch}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        value={defaultValue}
        placeholder={placeholder}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 10,
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2.0,
    elevation: 1,
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default Search;
