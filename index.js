/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

//AppRegistry.registerComponent(appName, () => TaskList);
AppRegistry.registerComponent(appName, () => Navigator);