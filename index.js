/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';
import Navigation from './src/Navigation'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Navigation);
