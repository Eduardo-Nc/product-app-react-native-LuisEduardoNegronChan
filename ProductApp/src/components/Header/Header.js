import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'

//Constants
import { SIZES, COLORS, isAndroid, ICONS } from '@Utils/constants';

const Header = ({ icon, title }) => {


  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: isAndroid ? 70 : 90,
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
});
export default Header