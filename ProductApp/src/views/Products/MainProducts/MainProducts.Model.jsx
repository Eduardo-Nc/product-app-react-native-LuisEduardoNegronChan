import {useState, useLayoutEffect} from 'react';

//Librerias
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

//Languages
import {translate} from '@Languages/I18n';

//Services
import {getAllProducts} from '@Services/productsService';

//Redux
import {setProductsData} from '../redux/actions/index';

export default function useMainProductsModel() {
  //Redux
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

  //Navigation
  const navigator = useNavigation();

  //useState
  const [loading, setLoading] = useState(false);

  //functions
  const findProducts = () => {
    setLoading(true);
    getAllProducts()
      .then(res => {
        showMessage({
          message: `${translate('popupMessage.acceptSubTitle')}`,
          type: 'success',
        });
        dispatch(setProductsData(res));
      })
      .catch(err => {
        showMessage({
          message: `${translate('serverError.InternalError')}`,
          type: 'danger',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const goToDetails = ({id}) => {
    navigator.navigate('MainStack', {
      screen: 'UIProductDetails',
      params: {id},
    });
  };

  useLayoutEffect(() => {
    findProducts();
  }, []);

  return {
    loading,
    setLoading,
    navigator,
    products,
    goToDetails,
  };
}
