import {moderateScale} from 'react-native-size-matters';

export const common = {
  sizeFont: {
    // h1:48dp
    size1: moderateScale(25),
    // h2:40dp
    size2: moderateScale(18.72),
    // h3:30dp
    size3: moderateScale(14, 0.5),
    // h4:28dp
    size4: moderateScale(13),
    // h5:25dp
    size5: moderateScale(12, 0.5),
    // h6:23dp
    size6: moderateScale(10, 0.5),
    // h7:20dp
    size7: moderateScale(9, 0.5),
    // h8:16dp
    size8: moderateScale(8),
    // h9 : 16
  },
};

export default function typeColor(type) {
  switch (type) {
    case 'grass':
      return '#438C30';
    case 'fire':
      return '#D93023';
    case 'water':
      return '#2C6EB0';
    case 'normal':
      return '#BCB5B3';
    case 'electric':
      return '#EB9538';
    case 'fire':
      return '#EB4770';
    case 'fighting':
      return '#6D2A0F';
    case 'rock':
      return '#A28841';
    case 'ground':
      return '#D2B160';
    case 'flying':
      return '#5F7DD7';
    case 'bug':
      return '#88952F';
    case 'poison':
      return '#833581';
    case 'psychic':
      return '#E66488';
    case 'dark':
      return '#472E1D';
    case 'ghost':
      return '#5860AA';
    case 'ice':
      return '#5FD1F4';
    case 'steel':
      return '#8E8E9C';
    case 'dragon':
      return '#7D6AD5';
    case 'fairy':
      return '#ECA4EC';
  }
}

export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function InfoParams(detail) {
  return [
    {
      ID: detail.id,
      'BASE XP': detail.base_experience,
    },
    {HEIGHT: detail.height, WEIGHT: detail.weight},
  ];
}

export function StatusParams(data) {
  return [
    {
      HP: data.stats[0].base_stat,
      SPD: data.stats[5].base_stat,
    },
    {
      ATK: data.stats[1].base_stat,
      'S-ATK': data.stats[3].base_stat,
    },
    {
      DEF: data.stats[2].base_stat,
      'S-DEF': data.stats[4].base_stat,
    },
  ];
}