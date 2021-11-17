/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Root } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';
import reduxStore from './src/redux/Store';
const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <Root>
          <StatusBar barStyle="dark-content" />
          <AppNavigation />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
