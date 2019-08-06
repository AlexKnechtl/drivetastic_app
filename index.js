/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { App, Router } from "./src/app";
import { Login } from './src/views/Auth';
import {name as appName} from './app.json';
import storybook from './storybook'

AppRegistry.registerComponent(appName, () => Router);
