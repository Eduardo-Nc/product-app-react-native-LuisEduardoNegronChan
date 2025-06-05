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
  containerAddProduct: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary,
  },
  btnAddProduct: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});
