import {StyleSheet} from 'react-native';

//Constants
import {SIZES, COLORS} from '@Utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    padding: 25,
    width: SIZES.width,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ActIndiContainer: {
    width: SIZES.width,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  txtSlogan: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 30,
    marginTop: 20,
  },
});
