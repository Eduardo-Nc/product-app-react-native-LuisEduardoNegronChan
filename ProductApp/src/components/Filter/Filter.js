import { COLORS, ICONS } from '@Utils/constants';
import React from 'react'
import { View, TouchableOpacity, Keyboard, StyleSheet, TextInput, Image } from 'react-native'

const Filter = ({ txtSearch, setTxtSearch }) => {

  const resetSearch = () => {
    setTxtSearch('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.searchMainContainer}>
      <View style={styles.viewSearch}>
        <TextInput
          onChangeText={text => {
            setTxtSearch(text);
          }}
          value={txtSearch}
          style={styles.txtInputSearch}
          placeholder="Buscar..."
          placeholderTextColor={COLORS.placeholder}
        />
        {txtSearch && (
          <TouchableOpacity
            onPress={() => {
              resetSearch();
            }}
            style={styles.btnCloseContainer}>
            <Image source={ICONS.Close} style={styles.iconBtnClose} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchMainContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  viewSearch: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    overflow: 'hidden',
  },
  txtInputSearch: {
    width: '80%',
    height: '100%',
    color: COLORS.black,
    fontSize: 15,
    paddingLeft: 20,
    overflow: 'hidden',
  },
  btnCloseContainer: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconBtnClose: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});

export default Filter