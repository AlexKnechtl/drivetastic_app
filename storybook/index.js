import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';
import { loadStories } from "./storyLoader";
import {name as appName} from '../app.json'

// import stories
configure(() => {
  loadStories();
  // require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({port: 7007, host: 'localhost'});
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}
// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIHMRRoot;
