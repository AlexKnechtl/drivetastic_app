import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, StartAutoLoginAction } from 'core';
import { Router } from './Router';
import './i18n';
//@ts-ignore
import { setCustomText } from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: "SFUIDisplay-Medium"
  }
};

const store = configureStore();

store.dispatch(StartAutoLoginAction());

const App = () => {
  setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export { App };