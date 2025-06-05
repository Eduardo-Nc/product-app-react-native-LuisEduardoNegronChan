import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'

//Librerias
import { useNavigation } from '@react-navigation/core';

//Constants
import { SIZES, COLORS, isAndroid, ICONS } from '@Utils/constants';

const Header = ({ icon = "", title = "", goToBack = false }) => {

  //Navigation
  const navigator = useNavigation();

  const goBack = () => {
    navigator.goBack()
  }

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        {goToBack &&
          <TouchableOpacity style={styles.backContainer} onPress={() => {
            goBack()
          }}>
            <Image style={styles.iconBack} source={ICONS.LeftArrow} />
          </TouchableOpacity>
        }
        <Text style={styles.title}>{title}</Text>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: isAndroid ? 70 : 100,
    paddingTop: isAndroid ? 0 : 40,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  backContainer: {
    top: isAndroid ? 30 : 60,
    left: 20,
    width: 45,
    height: 45,
    position: 'absolute',
  },
  iconBack: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    tintColor: COLORS.white
  }
});
export default Header