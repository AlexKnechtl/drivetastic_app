/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { App, Router } from "./src/app";
import { Reg_EasyLearn, Start, Reg_Languages, Reg_Multilanguage, Reg_UserData } from './src/views/Auth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
