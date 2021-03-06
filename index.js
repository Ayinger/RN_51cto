/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


//下面两行代码：关闭黄色警告
console.ignoredYellowBox = [
    "Warning: BackAndroid is deprecated. Please use BackHandler instead.",
    "source.uri should not be an empty string",
    "Invalid props.style key"
];
console.disableYellowBox = true; // 关闭全部黄色警告