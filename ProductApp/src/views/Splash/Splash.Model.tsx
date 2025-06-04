import {useEffect} from 'react';

//Librerias
import {useNavigation} from '@react-navigation/core';

export default function useSplashModel() {
  //Navigation
  const navigator = useNavigation();

  const changeToProducts = () => {
    setTimeout(() => {
      navigator.reset({
        index: 0,
        routes: [{name: 'UIMainProducts'}],
      });
    }, 3000);
  };

  useEffect(() => {
    changeToProducts();
  }, []);

  return {};
}
