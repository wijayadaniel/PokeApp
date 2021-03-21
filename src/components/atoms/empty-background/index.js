import React from 'react';
import {View, Text} from 'react-native';
import {common} from '../../../helpers/common';

const EmptyBackgroundData = ({titleText, subTitleText}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: common.sizeFont.size2}}>{titleText}</Text>
      <Text style={{fontSize: common.sizeFont.size3}}>{subTitleText}</Text>
    </View>
  );
};

export default EmptyBackgroundData;
