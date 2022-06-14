/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskList from './src/screens/TaskList';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

//AppRegistry.registerComponent(appName, () => TaskList);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(TaskList));