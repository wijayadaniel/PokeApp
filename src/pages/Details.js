import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import DetailsDamageList from '../components/atoms/pokemon-detail/demageList';
import DetailImages from '../components/atoms/pokemon-detail/detailImages';
import DetailsInfo from '../components/atoms/pokemon-detail/info';
import PokemonType from '../components/atoms/pokemon-type';
import {InfoParams, StatusParams} from '../helpers/common';

const Details = ({route}) => {
  const {pokemonDetail} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <DetailImages sprites={pokemonDetail.sprites} />
          <View style={styles.typeContainer}>
            <PokemonType types={pokemonDetail.types} details_flag={1} />
          </View>
          <DetailsInfo header={'Info: '} params={InfoParams(pokemonDetail)} />
          <DetailsInfo
            header={'Status: '}
            params={StatusParams(pokemonDetail)}
          />
          <DetailsDamageList typeList={pokemonDetail.types} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(20),
  },
});

export default Details;
