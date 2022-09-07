import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/Contact';
import ByLocation from '../screens/ByLocation';
import ByPseudo from '../screens/ByPseudo';

const Stack = createStackNavigator();

const StackContact = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Contact' component={Contact}/>
        <Stack.Screen name='ByLocation' component={ByLocation}/>
        <Stack.Screen name='ByPseudo' component={ByPseudo}/>
    </Stack.Navigator>
  )
}

export default StackContact

const styles = StyleSheet.create({})