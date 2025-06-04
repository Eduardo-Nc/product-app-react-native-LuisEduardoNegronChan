import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SplashScreen from '@Views/Splash/Splash.Screen';

export const MainStack = () => {

  //Navigation
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="UISplash"
      screenOptions={{ headerShown: false }}>

      {/* Splash */}
      <Stack.Screen name="UISplash" component={SplashScreen} />

    </Stack.Navigator>
  );
};
