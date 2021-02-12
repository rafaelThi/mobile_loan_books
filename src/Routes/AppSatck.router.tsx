import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SearchPager from '../Pages/SearchPage';
import PageBook from '../Pages/PageBook';
import LoginPageAdmin from '../Pages/LoginPageAdmin';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name="Home" component={HomePage} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="SearchPage" component={SearchPager} />
        <Screen name="PageBook" component={PageBook} />
        <Screen name="LoginPageAdmin" component={LoginPageAdmin} />

      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
