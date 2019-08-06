/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { App, Router } from "./src/app";
import { Reg_Multilanguage } from './src/views/Auth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Reg_Multilanguage);
