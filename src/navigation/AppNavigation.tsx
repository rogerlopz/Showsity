import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SeriesDetailsScreen from '../screens/series/SeriesDetailsScreen.tsx';

export type StackNavigatorParams = {
  Home: undefined;
  ShowDetails: {seriesId: number};
};

// useNavigation props for series details screen
export type ShowDetailsNavigationProp = NativeStackNavigationProp<
  StackNavigatorParams,
  'ShowDetails'
>;

export type DetailsScreenRouteProp = RouteProp<
  StackNavigatorParams,
  'ShowDetails'
>;

const Stack = createNativeStackNavigator<StackNavigatorParams>();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
