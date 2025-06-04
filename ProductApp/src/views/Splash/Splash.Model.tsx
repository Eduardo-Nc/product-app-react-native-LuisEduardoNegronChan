import {useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

export default function useSplashModel() {
  const navigation = useNavigation();

  const navigateToProducts = useCallback(() => {
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'UIMainProducts'}],
      });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useEffect(() => {
    const cleanup = navigateToProducts();
    return cleanup;
  }, [navigateToProducts]);

  return {};
}
