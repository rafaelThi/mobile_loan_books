import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../Pages/HomePage'


const {Navigator, Screen} = createStackNavigator();

function  AppStack() {
    return(
        <NavigationContainer>
            <Navigator  screenOptions={{headerShown : false}}  >

                <Screen name='Home' component={HomePage} />

            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;