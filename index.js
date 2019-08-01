/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { App } from "./src/app";
import { Reg_DriveCode } from './src/views/Auth';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Reg_DriveCode);
