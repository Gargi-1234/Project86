import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator.js';
import Profile from '../screens/Profile.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen
                name="Home" component={StackNavigator}
            />
            <Drawer.Screen
                name="Profile" component={Profile}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
