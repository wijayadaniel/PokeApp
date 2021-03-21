import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {common} from '../../../helpers/common';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <ActivityIndicator animating={true} color="blue" size="large" />
      <Text style={{fontSize: common.sizeFont.size3}}>Loading Pokemon</Text>
    </View>
  );
};

export default Loading;
