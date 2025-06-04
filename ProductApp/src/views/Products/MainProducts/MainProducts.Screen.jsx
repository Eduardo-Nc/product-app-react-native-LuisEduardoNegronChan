import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//Languages
import {translate} from '@Languages/I18n';

//Model
import useMainProductsModel from './MainProducts.Model';

//Styles
import {styles} from './MainProducts.Styles';

//Components
import Loader from '@Components/Loader/Loader';

//Constants
import {COLORS, ICONS} from '@Utils/constants';

const MainProductsScreen = () => {
  const {navigator, loading, setLoading, products} = useMainProductsModel();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          data={products ? products : []}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                style={styles.productItem}
                onPress={() => {
                  navigator.navigate('MainStack', {
                    screen: '',
                  });
                }}></TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
      <Loader visible={loading} setVisible={setLoading} />
    </View>
  );
};

export default MainProductsScreen;
