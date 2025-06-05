import {useState, useLayoutEffect} from 'react';

//Librerias
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

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

  //Redux
  const dispatch = useDispatch();

  //useState
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  //functions
  const findProduct = () => {
    setLoading(true);
    getProductById(id)
      .then(res => {
        console.log(res);
        showMessage({
          message: `${translate('popupMessage.acceptSubTitle')}`,
          type: 'success',
        });
        setProduct(res);
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

  const formattedPrice = price => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(price));
  };

  useLayoutEffect(() => {
    findProduct();
  }, []);

  return {loading, setLoading, product, formattedPrice};
}
