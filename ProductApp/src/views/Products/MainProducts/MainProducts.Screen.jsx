import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

//Model
import useMainProductsModel from './MainProducts.Model';

//Styles
import {styles} from './MainProducts.Styles';

//Components
import Loader from '@Components/Loader/Loader';
import Header from '@Components/Header/Header';
import ItemProduct from '@Components/Item/itemProduct';
import EmptyComponent from '@Components/EmptyComponent/EmptyComponent';
import Filter from '@Components/Filter/Filter';

//Languages
import {translate} from '@Languages/I18n';

//constants
import {ICONS} from '@Utils/constants';

const MainProductsScreen = () => {
  const {
    loading,
    setLoading,
    products,
    goToDetails,
    formattedPrice,
    goToCreateProduct,
    txtSearch,
    setTxtSearch,
    filteredProducts,
  } = useMainProductsModel();

  return (
    <View style={styles.container}>
      <Header icon={ICONS.Canasta} title={translate('appName')} />
      <SafeAreaView style={styles.mainContainer}>
        <Filter txtSearch={txtSearch} setTxtSearch={setTxtSearch} />
        <FlatList
          style={styles.flatList}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
          data={loading ? [] : filteredProducts}
          numColumns={2}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={({index, item}) => {
            const isLeftColumn = index % 2 === 0;
            return (
              <ItemProduct
                index={index}
                item={item}
                action={goToDetails}
                isLeftColumn={isLeftColumn}
                formattedPrice={formattedPrice}
              />
            );
          }}
          ListEmptyComponent={EmptyComponent}
        />
        <TouchableOpacity
          style={styles.containerAddProduct}
          onPress={() => {
            goToCreateProduct();
          }}>
          <Image style={styles.btnAddProduct} source={ICONS.Plus} />
        </TouchableOpacity>
      </SafeAreaView>
      <Loader visible={loading} setVisible={setLoading} />
    </View>
  );
};

export default MainProductsScreen;
