import React from 'react';
import {View, SafeAreaView} from 'react-native';

//Languages
import {translate} from '@Languages/I18n';

//Model
import useProductDetailsModel from './ProductDetails.Model';

//Styles
import {styles} from './ProductDetails.Styles';

//Constants
import {COLORS, ICONS} from '@Utils/constants';

const ProductDetailsScreen = () => {
  const {} = useProductDetailsModel();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}></SafeAreaView>
    </View>
  );
};

export default ProductDetailsScreen;
