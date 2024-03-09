import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeriesDetailsScreen from '../screens/series/SeriesDetailsScreen.tsx';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen name="ShowDetails" component={SeriesDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
