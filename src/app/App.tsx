import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from 'core';
import { Router } from './Router';

const store = configureStore();

const App = () => {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
};

export { App };