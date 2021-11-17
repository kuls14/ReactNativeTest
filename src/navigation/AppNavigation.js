import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import VaccineLocationListScreen from '../screens/VaccineLocationList';
import { Colors } from '../styles';
import { navigationRef } from './NavigationRef';
import NavigationRoutes from './NavigationRoutes';

const RootStack = createStackNavigator();

const stackScreenOptions = {
  headerBackTitleVisible: false,
  headerTintColor: Colors.black,
  headerTitleAlign: 'center',
  cardStyle: {
    backgroundColor: Colors.white,
  },
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={stackScreenOptions}
        initialRouteName={NavigationRoutes.Login}>
        <RootStack.Screen
          options={{ headerShown: true, title: 'Vaccine Location List' }}
          name={NavigationRoutes.vaccineLocationList}
          component={VaccineLocationListScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
