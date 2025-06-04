import {StyleSheet} from 'react-native';

//Constants
import {SIZES, COLORS} from '@Utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
    flex: 1,
  },
  productItem: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
});
