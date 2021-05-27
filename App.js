import React,{Component} from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import InstagramScreen from './screens/InstagramScreen'
import FacebookScreen from './screens/FacebookScreen'

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
Instagram: {screen:InstagramScreen},
Facebook: {screen:FacebookScreen}
})

const AppContainer=createAppContainer(TabNavigator)

