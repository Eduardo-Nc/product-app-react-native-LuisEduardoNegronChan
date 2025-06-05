import {useState} from 'react';

//Librerias
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

//Languages
import {translate} from '@Languages/I18n';

//Redux
import {setProductsData} from '../redux/actions/index';

export default function useCreateEditProductModel({route}) {
  //Params
  const {params} = route;
  const {id, isCreate} = params;

  console.log('id ', id);
  console.log('isCreate ', isCreate);

  //Redux
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

  //Navigation
  const navigator = useNavigation();

  //useState
  const [loading, setLoading] = useState(false);

  //functions

  return {
    loading,
    setLoading,
  };
}
