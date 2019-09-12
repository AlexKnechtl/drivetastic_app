import React from 'react';
import { Provider, connect } from 'react-redux';
import { configureStore, StartAutoLoginAction, StateType } from 'core';
import { Router } from './Router';
import './i18n';
//@ts-ignore
import { setCustomText } from 'react-native-global-props';
import { ThemeContext, colorsDark, colorsLight } from 'base';

const customTextProps = {
  style: {
    fontFamily: "SFUIDisplay-Medium"
  }
};

const store = configureStore();

store.dispatch(StartAutoLoginAction());

const mapStateToProps = (state: StateType) => ({
  darkmode: state.settings.darkMode
})

type props = ReturnType<typeof mapStateToProps>;
const enhance = connect(mapStateToProps);


const themeWrapper: React.FunctionComponent<props> = ({darkmode, children})=>(
  <ThemeContext.Provider value={darkmode ? colorsDark : colorsLight}>
    {children}
  </ThemeContext.Provider>
)

const ConnectedThemeWrapper = enhance(themeWrapper);

const App = () => {
  setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <ConnectedThemeWrapper>
        <Router />
      </ConnectedThemeWrapper>
    </Provider>
  );
};

export { App };