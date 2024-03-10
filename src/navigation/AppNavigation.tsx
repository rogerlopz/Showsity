import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainSeriesScreen from '../screens/series/MainSeriesScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeriesDetailsScreen from '../screens/series/SeriesDetailsScreen.tsx';
import {StackNavigatorParams} from './types.ts';

const Stack = createNativeStackNavigator<StackNavigatorParams>();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainSeriesScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ShowDetails"
          component={SeriesDetailsScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#504945',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
