import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SearchPager from '../Pages/SearchPage';
import PageBook from '../Pages/PageBook';
import LoginPageAdmin from '../Pages/LoginPageAdmin';
import NewBookPage from '../Pages/NewBookPage';
import ChoicePageAdmin from '../Pages/ChoicePageAdmin';
import DevolutionPage from '../Pages/DevolutionPage';
import RequestPage from '../Pages/RequestPage';
import RequestAcceptPage from '../Pages/RequestAcceptPage';
import HistoryRequestsPage from '../Pages/HistoryRequestsPage';

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
        <Screen name="NewBookPage" component={NewBookPage} />
        <Screen name="ChoicePageAdmin" component={ChoicePageAdmin} />
        <Screen name="DevolutionPage" component={DevolutionPage} />
        <Screen name="RequestPage" component={RequestPage} />
        <Screen name="RequestAcceptPage" component={RequestAcceptPage} />
        <Screen name="HistoryRequestsPage" component={HistoryRequestsPage} />

      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
