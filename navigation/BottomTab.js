import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet, Text, View, Image, TouchableOpacity, Animated, Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native";

import React, {useState, useRef} from 'react';

import Home from "../screens/Home";
import Cloud from "../screens/Cloud";
// import Contact from "../screens/Contact";
import StackContact from "./StackContact";
import Group from "../screens/Group";

const Tab = createBottomTabNavigator();

const CustomtabBarButton = ({children, onPress}) => {

    return(
        <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center'
        }}
            onPress={onPress}
        >
            <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#E32F45'}}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

const BottomTab = () => {
 
    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    const getWidth = () => {
        let width = Dimensions.get('window').width;
        // width = width-40
        return width = width/4
    }
  
    return(
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        // position: 'absolute',
                        backgroundColor: '#fff',
                        height: 60,
                        // ...styles.shadow
                    }
                }}
                
            >
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                <Ionicons name='home-outline' size={25} color={focused ? '#400590' : '#748C94'} />
                                <Text style={{fontSize: 12, color: focused ? '#400590' : '#748C94'}}>Home</Text>
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                          Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                          }).start();
                        }
                      })}
                />
                <Tab.Screen name="Cloud" component={Cloud}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                <Ionicons name='cloud-outline' size={25} color={focused ? '#400590' : '#748C94'} />
                                <Text style={{fontSize: 12, color: focused ? '#400590' : '#748C94'}}>My Cloud</Text>
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                          Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                          }).start();
                        }
                      })}
                />
                <Tab.Screen name="StackContact" component={StackContact} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                <Ionicons name='people-outline' size={25} color={focused ? '#400590' : '#748C94'} />
                                <Text style={{fontSize: 12, color: focused ? '#400590' : '#748C94'}}>Contact</Text>
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                          Animated.spring(tabOffsetValue, {
                            toValue: getWidth()*2,
                            useNativeDriver: true
                          }).start();
                        }
                      })}
                />
                <Tab.Screen name="Group" component={Group} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                <Ionicons name='ios-people-circle-outline' size={25} color={focused ? '#400590' : '#748C94'} />
                                <Text style={{fontSize: 12, color: focused ? '#400590' : '#748C94'}}>Groupe</Text>
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                          Animated.spring(tabOffsetValue, {
                            toValue: getWidth()*3,
                            useNativeDriver: true
                          }).start();
                        }
                      })}
                />
            </Tab.Navigator>
            <Animated.View style={{
                width: getWidth(),
                height: 2,
                backgroundColor: '#400590',
                position: 'absolute',
                bottom: 60,
                borderRadius: 3,
                // left: 10,
                transform: [
                    {translateX: tabOffsetValue}
                ]
                }}>


            </Animated.View>   
        </>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})