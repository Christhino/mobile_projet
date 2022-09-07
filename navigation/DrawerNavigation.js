import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent  from './DrawerContent';
import Drawer1 from '../screens/Drawer1';
import Drawer2 from '../screens/Drawer2';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Drawer1" component={Drawer1} />
            <Drawer.Screen name="Drawer2" component={Drawer2} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation