/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Auth from './src/screens/Auth';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

//AppRegistry.registerComponent(appName, () => TaskList);
AppRegistry.registerComponent(appName, () => Auth);