import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {common} from '../../../helpers/common';

const DetailsInfo = ({header, params}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{header}</Text>
      <View style={styles.infoColumnContainer}>
        {params.map((item) => {
          const keys = Object.keys(item);
          const values = Object.values(item);
          return (
            <View style={styles.infoCellContainer}>
              <View style={styles.infoCell}>
                <Text
                  style={
                    styles.infoCellText
                  }>{`${keys[0]}: ${values[0]}`}</Text>
              </View>
              <View style={styles.infoCell}>
                <Text
                  style={
                    styles.infoCellText
                  }>{`${keys[1]}: ${values[1]}`}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(12),
    marginHorizontal: scale(20),
  },
  titleText: {
    paddingTop: scale(5),
    fontSize: common.sizeFont.size3,
    textAlign: 'left',
  },
  infoColumnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: scale(4),
  },
  infoCellContainer: {
    flexDirection: 'row',
    margin: scale(4),
  },
  infoCell: {
    borderRadius: scale(6),
    borderWidth: 2,
    marginHorizontal: scale(4),
  },
  infoCellText: {
    paddingBottom: 1,
    paddingHorizontal: scale(4),
  },
});

export default DetailsInfo;
