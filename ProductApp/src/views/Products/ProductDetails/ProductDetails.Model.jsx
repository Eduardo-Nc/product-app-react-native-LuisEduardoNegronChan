import {useState, useLayoutEffect, useEffect} from 'react';
import {Alert} from 'react-native';

//Librerias
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/core';

//Languages
import {translate} from '@Languages/I18n';

//Services
import {getProductById, daleteProduct} from '@Services/productsService';

//Redux
import {setProductsData, setDatailsProduct} from '../redux/actions/index';

export default function useProductDetailsModel({route}) {
  //Params
  const {params} = route;
  const {id} = params;

  //Navigation
  const navigator = useNavigation();

  //Redux
  const dispatch = useDispatch();
  const {products, selectedProduct} = useSelector(state => state.products);

  //useState
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const [isError, setIsError] = useState(false);
  const [txtError, setTxtError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  //functions
  const findProduct = () => {
    setLoading(true);
    getProductById(id)
      .then(res => {
        showMessage({
          message: `${translate('popupMessage.acceptSubTitle')}`,
          type: 'success',
        });
        setProduct(res);
      })
      .catch(err => {
        setIsError(true);
        setTxtError(translate('serverError.IDNotFound'));
        setIsVisible(true);
        showMessage({
          message: `${translate('serverError.InternalError')}`,
          type: 'danger',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formattedPrice = price => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(price));
  };

  const goToUpdateProduct = () => {
    navigator.navigate('MainStack', {
      screen: 'UICreateEditProduct',
      params: {data: product, isCreate: false},
    });
  };

  const deleteProduct = () => {
    Alert.alert(
      translate('Modal.warning'),
      translate('messageGeneral.confirmDelete'),
      [
        {
          text: translate('Modal.cancelar'),
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: translate('Modal.aceptar'),
          onPress: async () => {
            dalProduct();
          },
        },
      ],
      {cancelable: true},
    );
  };

  const dalProduct = () => {
    setLoading(true);
    daleteProduct(id)
      .then(res => {
        console.log('res delete ==> ', res);
        simulateElimination();
      })
      .catch(err => {
        setIsError(true);
        setTxtError(translate('serverError.InternalError'));
        setIsVisible(true);
        showMessage({
          message: `${translate('serverError.InternalError')}`,
          type: 'danger',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const simulateElimination = () => {
    const copyProducts = products;
    const filterProduct = copyProducts.filter(item => item.id !== id);
    dispatch(setProductsData(filterProduct));
    setIsError(false);
    setIsVisible(true);
  };

  const goToBack = () => {
    setIsVisible(false);
    navigator.goBack();
  };

  useEffect(() => {
    if (selectedProduct && id) {
      setProduct(selectedProduct);
    } else {
      dispatch(setDatailsProduct({}));
    }
  }, [selectedProduct]);

  useLayoutEffect(() => {
    findProduct();
  }, []);

  return {
    loading,
    setLoading,
    product,
    formattedPrice,
    goToUpdateProduct,
    deleteProduct,
    isError,
    isVisible,
    setIsVisible,
    goToBack,
    txtError,
  };
}
