import {useState, useLayoutEffect} from 'react';
import {Alert} from 'react-native';

//Librerias
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/core';

//Languages
import {translate} from '@Languages/I18n';

//Services
import {getProductById} from '@Services/productsService';

//Redux
import {setProductsData} from '../redux/actions/index';

export default function useProductDetailsModel({route}) {
  //Params
  const {params} = route;
  const {id} = params;

  //Navigation
  const navigator = useNavigation();

  //Redux
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

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
      params: {data: product, edit: setProduct, isCreate: false},
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
            simulateElimination();
          },
        },
      ],
      {cancelable: true},
    );
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
