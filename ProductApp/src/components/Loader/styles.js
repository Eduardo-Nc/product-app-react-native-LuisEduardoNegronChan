import {StyleSheet} from 'react-native';
import {COLORS} from '@Utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  principalText: {
    width: '90%',
    fontSize: 29,
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
