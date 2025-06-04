import React from 'react'

//Librerias
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navigation
const Stack = createNativeStackNavigator();

//Stack
import { MainStack } from '@Navigation/stack/MainStack';

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default NavContainer;