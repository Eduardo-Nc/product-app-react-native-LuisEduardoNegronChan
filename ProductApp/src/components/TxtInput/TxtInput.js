import React from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native'

//Constants
import { SIZES, COLORS, ICONS } from '@Utils/constants';

const TxtInput = ({ field = "", value = "", title = "", type = "default", placeholder = "", onChangeTxt, isEditable = true }) => {

  return (
    <View style={styles.container}>
      <Text testID="txtTextInput" style={styles.txtTitleInputs}>{title}</Text>
      <TextInput
        editable={isEditable}
        placeholder={placeholder}
        style={styles.txtInput}
        value={value.toString()}
        keyboardType={type}
        onChangeText={onChangeTxt(field)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 15
  },
  txtTitleInputs: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.black,
    marginBottom: 5

  },
  txtInput: {
    width: "100%",
    height: 45,
    color: COLORS.black,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    borderRadius: 10,
    paddingHorizontal: 15
  }

});
export default TxtInput