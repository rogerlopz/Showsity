import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowDetailsScreen from '../screens/series/ShowDetailsScreen.tsx';

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

        <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
