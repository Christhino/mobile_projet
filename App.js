import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './screens/OnBoarding';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import BottomTab from './navigation/BottomTab';
import DrawerNavigation from './navigation/DrawerNavigation';

import 'react-native-gesture-handler';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import WithAccount from './screens/WithAccount';
import WithoutAccount from './screens/WithoutAccount';
import Profile from './screens/Profile';

const getFonts = () => {
  return Font.loadAsync({
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
  })
}

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor='transparent' />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='OnBoarding' component={OnBoarding} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='BottomTab' component={BottomTab} />
          <Stack.Screen name='Drawer' component={DrawerNavigation} />
          <Stack.Screen name='WithAccount' component={WithAccount} />
          <Stack.Screen name='WithoutAccount' component={WithoutAccount} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
        <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.warn(error)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
