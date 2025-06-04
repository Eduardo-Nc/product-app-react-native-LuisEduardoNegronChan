import React from 'react';
import {View, SafeAreaView} from 'react-native';

//Languages
import {translate} from '@Languages/I18n';

//Model
import useMainProductsModel from './MainProducts.Model';

//Styles
import {styles} from './MainProducts.Styles';

//Constants
import {COLORS, ICONS} from '@Utils/constants';

const MainProductsScreen = () => {
  const {} = useMainProductsModel();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}></SafeAreaView>
    </View>
  );
};

export default MainProductsScreen;
