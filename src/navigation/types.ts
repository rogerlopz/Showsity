import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type StackNavigatorParams = {
  Home: undefined;
  ShowDetails: {seriesId: number};
};

// useNavigation props for series details screen
export type ShowDetailsNavigationProp = NativeStackNavigationProp<
  StackNavigatorParams,
  'ShowDetails'
>;

// useRouter props for series details screen
export type DetailsScreenRouteProp = RouteProp<
  StackNavigatorParams,
  'ShowDetails'
>;
