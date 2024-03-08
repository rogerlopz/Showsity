import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetShowQuery} from '../../services/shows.ts';
import {useRoute} from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import ShowSeasonsList from '../../components/showDetails/ShowSeasonsList.tsx';

const viewHeight: number = Dimensions.get('window').height;
function ShowDetailsScreen(): React.JSX.Element {
  const route = useRoute();
  const {data, isLoading, isError} = useGetShowQuery(route.params.seriesId);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading show details...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Whoops, looks like something went wrong. Try refreshing</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image
        src={data.image.original}
        style={styles.showImageBackground}
        resizeMode="contain"
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
      />

      <View style={styles.showInfoContainer}>
        <Text style={styles.showTitle}>{data.name}</Text>

        <Text>
          At {data.schedule.time} on {data.schedule.days.join(', ')}
        </Text>

        <Text>{data.genres.join(', ')}</Text>

        <Text>
          Seasons: {data.totalSeasons} Episodes:
          {data.totalEpisodes}
        </Text>

        <HTMLView value={data.summary} />

        <Text>Episodes</Text>

        <ShowSeasonsList seasons={data.seasons} />
      </View>
    </ScrollView>
  );
}

export default ShowDetailsScreen;

const styles = StyleSheet.create({
  showInfoContainer: {
    padding: 8,
  },
  showImageBackground: {
    height: viewHeight / 2,
  },
  showTitle: {
    fontSize: 48,
  },
});
