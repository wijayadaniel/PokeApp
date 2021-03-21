import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {InfoParams} from '../../../helpers/common';
import DetailsDamageList from '../../atoms/pokemon-detail/demageList';
import DetailImages from '../../atoms/pokemon-detail/detailImages';
import DetailsInfo from '../../atoms/pokemon-detail/info';
import PokemonType from '../../atoms/pokemon-type';

const CompareCard = ({dataDetail}) => {
  return (
    <View style={styles.container}>
      <DetailImages sprites={dataDetail.sprites} />
      <View style={styles.typeContainer}>
        <PokemonType types={dataDetail.types} details_flag={1} />
      </View>
      <DetailsInfo header={'Info: '} params={InfoParams(dataDetail)} />
      <DetailsInfo header={'Status: '} params={InfoParams(dataDetail)} />
      <DetailsDamageList typeList={dataDetail.types} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, borderTopWidth: 0.5, borderBottomWidth: 0.5},
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(8),
  },
});

export default CompareCard;
