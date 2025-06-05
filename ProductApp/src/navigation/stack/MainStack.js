import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SplashScreen from '@Views/Splash/Splash.Screen';
import MainProductsScreen from '@Views/Products/MainProducts/MainProducts.Screen';
import ProductDetailsScreen from '@Views/Products/ProductDetails/ProductDetails.Screen';

// UICreateProduct
// UIUpdateProduct

export const MainStack = () => {

  //Navigation
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="UISplash"
      screenOptions={{ headerShown: false }}>

      {/* Splash */}
      <Stack.Screen name="UISplash" component={SplashScreen} />

      {/* Products */}
      <Stack.Screen name="UIMainProducts" component={MainProductsScreen} />
      <Stack.Screen name="UIProductDetails" component={ProductDetailsScreen} />

    </Stack.Navigator>
  );
};
