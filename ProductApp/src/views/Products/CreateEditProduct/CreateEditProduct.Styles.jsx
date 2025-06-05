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
  keyboardContainer: {
    flex: 1,
    width: '100%',
  },
  txtTitle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 25,
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerSave: {
    marginHorizontal: '5%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.secondary,
    marginTop: 15,
  },
  txtSave: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: '500',
  },
});
