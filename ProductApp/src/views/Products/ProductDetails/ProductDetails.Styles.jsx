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
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'flex-start',
  },
  txtTitle: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  detailsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  txtDescription: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '400',
    marginTop: 20,
  },
  txtPrice: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: '400',
    marginTop: 20,
  },
  containerAdd: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.secondary,
    marginTop: 15,
  },
  txtAdd: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: '500',
  },
  containerDelete: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.red,
    marginTop: 15,
  },
  txtDelete: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: '500',
  },
});
