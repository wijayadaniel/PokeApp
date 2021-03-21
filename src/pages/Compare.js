import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import {getPokemonList} from '../api/pokemonApi';
import Loading from '../components/atoms/loading';
import {capitalize, common} from '../helpers/common';
import DropDownPicker from 'react-native-dropdown-picker';
import {scale} from 'react-native-size-matters';
import ActionButton from '../components/atoms/button/action';
import axios from 'axios';
import {baseURL} from '../api/axiosInstance';
import CompareCard from '../components/molecules/compare-card';

const Compare = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [firstPick, setFirstPick] = useState('');
  const [secondPick, setSecondPick] = useState('');
  const [firstResult, setFirstResult] = useState([]);
  const [secondResult, setSecondResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    getPokemonList()
      .then((resp) => {
        let temp = [];
        resp.data.results.map((item) => {
          const data = {};
          data.label = capitalize(item.name);
          data.value = item.name;
          temp.push(data);
        });
        setPokemonList(temp);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const doCompare = async () => {
    const result1 = await axios.get(baseURL.pokeapi + 'pokemon/' + firstPick);
    const result2 = await axios.get(baseURL.pokeapi + 'pokemon/' + secondPick);
    setFirstResult(result1.data);
    setSecondResult(result2.data);
    setLoad(true);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {isLoading ? (
        <Loading />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: scale(16),
            marginVertical: scale(4),
          }}>
          <Text style={styles.titleText}>Select first pokemon:</Text>
          <DropDownPicker
            items={pokemonList}
            defaultValue={firstPick}
            placeholder={'Select your first pokemon'}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{
              backgroundColor: '#fafafa',
            }}
            onChangeItem={(item) => setFirstPick(item.value)}
            searchable={true}
            searchablePlaceholder="Type to search pokemon"
            searchablePlaceholderTextColor="gray"
          />
          <Text style={styles.titleText}>Select second pokemon:</Text>
          <DropDownPicker
            items={pokemonList}
            defaultValue={secondPick}
            placeholder={'Select your first pokemon'}
            containerStyle={{height: scale(40)}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setSecondPick(item.value)}
            searchable={true}
            searchablePlaceholder="Type to search pokemon"
            searchablePlaceholderTextColor="gray"
          />
          <ActionButton title={'Compare'} onPress={doCompare} />
          {load ? (
            <ScrollView>
              <CompareCard dataDetail={firstResult} />
              <CompareCard dataDetail={secondResult} />
            </ScrollView>
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginVertical: scale(12),
    fontSize: common.sizeFont.size3,
  },
});
export default Compare;
