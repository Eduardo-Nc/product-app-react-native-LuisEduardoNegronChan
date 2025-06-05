import {useEffect, useState} from 'react';

//Librerias
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

//Languages
import {translate} from '@Languages/I18n';

//Redux
import {setProductsData, setDatailsProduct} from '../redux/actions/index';

//Services
import {createProduct, updateProduct} from '@Services/productsService';

const initialData = {
  title: '',
  price: '',
  description: '',
  category: '',
};

export default function useCreateEditProductModel({route}) {
  //Params
  const {params} = route;
  const {data, isCreate} = params;

  //Redux
  const dispatch = useDispatch();
  const {products, selectedProduct} = useSelector(state => state.products);

  //Navigation
  const navigator = useNavigation();

  //useState
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(isCreate ? initialData : data);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  //functions
  const onChangeTxt = field => text => {
    if (field === 'price') {
      const numericText = text.replace(/[^0-9.]/g, '');
      const valid = numericText.split('.').length <= 2;
      if (!valid) return;
      setProductData(prev => ({
        ...prev,
        [field]: numericText,
      }));
    } else {
      setProductData(prev => ({
        ...prev,
        [field]: text,
      }));
    }
  };

  const saveProduct = () => {
    const {title, price, description, category} = productData;

    if (!title || !price || !description || !category) {
      showMessage({
        message: `${translate('products.necessaryData')}`,
        type: 'danger',
      });
      return;
    }

    if (isCreate) {
      setLoading(true);
      const newId =
        products.length > 0 ? Math.max(...products.map(p => p.id || 0)) + 1 : 1;

      const newProduct = {
        id: newId,
        ...productData,
        image: 'https://cdn-icons-png.flaticon.com/512/1059/1059219.png',
        rating: {rate: 0, count: 0},
      };

      createProduct(newProduct)
        .then(res => {
          dispatch(setProductsData([...products, newProduct]));
          setIsError(false);
          setIsVisible(true);
        })
        .catch(err => {
          setIsError(true);
          setIsVisible(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      updateProduct(productData?.id, productData)
        .then(res => {
          dispatch(setDatailsProduct(res));
          console.log(res);
          setIsError(false);
          setIsVisible(true);
        })
        .catch(err => {
          console.log('err update ', err);
          setIsError(true);
          setIsVisible(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const goToBack = () => {
    setIsVisible(false);
    navigator.goBack();
  };

  return {
    loading,
    setLoading,
    isCreate,
    productData,
    onChangeTxt,
    saveProduct,
    isError,
    isVisible,
    setIsVisible,
    goToBack,
  };
}
