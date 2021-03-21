import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {common} from '../../../helpers/common';
import useTypeSearch from '../../../helpers/useTypeSearch';
import EmptyBackgroundData from '../empty-background';
import PokemonType from '../pokemon-type';

const damageTextMap = {
  double_damage_from: 'x2 DMG From',
  half_damage_from: 'x1/2 DMG From',
  no_damage_from: 'No DMG From',
  double_damage_to: 'x2 DMG To',
  half_damage_to: 'x1/2 DMG To',
  no_damage_to: 'No DMG To',
};

const DetailsDamageList = ({typeList}) => {
  const [results, error] = useTypeSearch(typeList.map((item) => item.type.url));

  const processDamageData = () => {
    return results.reduce((acc, o) => {
      Object.keys(o).forEach((key) => {
        if (Array.isArray(o[key])) {
          const match = acc.get(key),
            items = o[key].map(({name}) => name);
          match
            ? match.push(
                ...items.filter((item) => {
                  if (match.indexOf(item) === -1) return item;
                }),
              )
            : acc.set(key, items);
        }
      });
      return acc;
    }, new Map());
  };

  const renderNothing = () => {
    return (
      <View style={styles.damageCellContainer}>
        <Text style={styles.emptyText}>Nothing</Text>
      </View>
    );
  };

  const renderDamageInfo = (damageKey) => {
    return (
      <View style={styles.damageCellContainer}>
        <Text style={styles.damageInfoText}>{damageTextMap[damageKey]}</Text>
      </View>
    );
  };

  const renderDamageType = (typeList) => {
    return (
      <View style={styles.damageCellContainer}>
        <PokemonType types={typeList} damage_flag={1} />
      </View>
    );
  };

  const renderDamageList = () => {
    if (error)
      return (
        <EmptyBackgroundData
          subTitleText={
            'Something when wrong while fetching damage stats data.'
          }
        />
      );
    if (results.length) {
      const damageMap = processDamageData();
      const damageKeys = Object.keys(damageTextMap);

      return damageKeys.map((damageKey, i) => {
        return (
          <View style={styles.damageListCellContainer} key={i}>
            {renderDamageInfo(damageKey)}
            <View style={styles.damageCellSeparator} />
            {damageMap.get(damageKey).length
              ? renderDamageType(damageMap.get(damageKey))
              : renderNothing()}
          </View>
        );
      });
    }
    return null;
  };

  return (
    <View style={styles.damageContainer}>
      <Text style={styles.titleText}>Damage Stats:</Text>
      {renderDamageList()}
    </View>
  );
};

const styles = StyleSheet.create({
  damageListCellContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: scale(8),
  },
  damageCellContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(140),
  },
  damageInfoText: {
    color: 'black',
    fontSize: common.sizeFont.size3,
  },
  damageCellSeparator: {marginHorizontal: scale(6)},
  damageContainer: {
    flexDirection: 'column',
    marginTop: scale(4),
    marginHorizontal: scale(16),
  },
  titleText: {
    paddingTop: scale(5),
    fontSize: common.sizeFont.size3,
    textAlign: 'left',
  },
  emptyText: {
    fontSize: common.sizeFont.size4,
    paddingTop: scale(5),
  },
});

export default DetailsDamageList;
