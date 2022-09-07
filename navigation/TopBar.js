import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Music from '../screens/cloudScreens/Music';
import Video from '../screens/cloudScreens/Video';
import Photo from '../screens/cloudScreens/Photo';
import Document from '../screens/cloudScreens/Document';
import Other from '../screens/cloudScreens/Other';

const Tab = createMaterialTopTabNavigator();

const TopBar = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        tabBarLabelStyle: { fontSize: 12,textTransform: 'none' },
        // tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'transparent' },
        
        tabBarIndicatorStyle:{backgroundColor: '#400590'}
      }}
    >
        <Tab.Screen name='Music' component={Music} />
        <Tab.Screen name='Video' component={Video} />
        <Tab.Screen name='Photo' component={Photo} />
        <Tab.Screen name='Doc' component={Document} />
        <Tab.Screen name='Autre' component={Other} />
    </Tab.Navigator>
  )
}

export default TopBar

const styles = StyleSheet.create({})