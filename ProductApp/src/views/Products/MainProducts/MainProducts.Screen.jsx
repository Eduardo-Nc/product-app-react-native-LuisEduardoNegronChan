import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

//Model
import useMainProductsModel from './MainProducts.Model';

//Styles
import {styles} from './MainProducts.Styles';

//Components
import Loader from '@Components/Loader/Loader';
import Header from '@Components/Header/Header';
import ItemProduct from '@Components/Item/itemProduct';

//Languages
import {translate} from '@Languages/I18n';

//constants
import {ICONS} from '@Utils/constants';

const MainProductsScreen = () => {
  const {loading, setLoading, products, goToDetails} = useMainProductsModel();

  return (
    <View style={styles.container}>
      <Header icon={ICONS.Canasta} title={translate('appName')} />
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
          data={products ? products : []}
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
              />
            );
          }}
        />
      </SafeAreaView>
      <Loader visible={loading} setVisible={setLoading} />
    </View>
  );
};

export default MainProductsScreen;
