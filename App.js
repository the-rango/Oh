import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from "./app/components/HomeScreen"
import DetailsScreen from "./app/components/Camera"
import CameraScreen from "./app/components/Component1"
import ImageScreen from "./app/components/ImageScreen"
import SearchImage from "./app/components/SearchImage"
import EventScreen from "./app/components/EventsMaker"
const AppNavigator = createStackNavigator({
  Home:  HomeScreen,
  SearchImage:SearchImage,
  Details:  DetailsScreen,
  Cameras: CameraScreen,
  Image:ImageScreen,
  Event:EventScreen
}, {
    initialRouteName: 'Home',
});


const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}