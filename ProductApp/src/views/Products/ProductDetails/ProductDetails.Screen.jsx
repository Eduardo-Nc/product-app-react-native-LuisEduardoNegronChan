import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//Languages
import {translate} from '@Languages/I18n';

//Model
import useProductDetailsModel from './ProductDetails.Model';

//Styles
import {styles} from './ProductDetails.Styles';

//Components
import Loader from '@Components/Loader/Loader';
import Header from '@Components/Header/Header';

//Constants
import {COLORS, ICONS} from '@Utils/constants';

const ProductDetailsScreen = ({route}) => {
  const {loading, setLoading, formattedPrice, product} = useProductDetailsModel(
    {route},
  );

  return (
    <View style={styles.container}>
      <Header
        icon={ICONS.Canasta}
        title={translate('appName')}
        goToBack={true}
      />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <Text style={styles.txtTitle}>{product?.title}</Text>
          {!loading && (
            <View style={styles.detailsContainer}>
              <Image style={styles.image} source={{uri: product?.image}} />
              <Text style={styles.txtDescription}>{product?.description}</Text>
              <Text style={styles.txtPrice}>
                {formattedPrice(product?.price)}
              </Text>

              <TouchableOpacity style={styles.containerAdd}>
                <Text style={styles.txtAdd}>
                  {translate('products.update')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerDelete}>
                <Text style={styles.txtDelete}>
                  {translate('products.delete')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>

      <Loader visible={loading} setVisible={setLoading} />
    </View>
  );
};

export default ProductDetailsScreen;
