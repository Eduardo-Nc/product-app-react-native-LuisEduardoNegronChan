import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Languages
import { translate } from '@Languages/I18n';
import { COLORS } from '@Utils/constants';

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtMessage}>
        {translate('withoutResults.noResultsFound')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  txtMessage: {
    fontSize: 18,
    color: COLORS.primary,
  },

});

export default EmptyComponent

