/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

//Librerias
import {Provider} from 'react-redux';
import {store, persistor} from '@Redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

//NavContainer
import NavContainer from '@Navigation/NavContainer.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavContainer></NavContainer>
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
