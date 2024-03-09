import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetShowByIdQuery} from '../../services/shows.ts';
import {useRoute} from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import SeriesSeasonList from '../../components/showDetails/SeriesSeasonList.tsx';
import GenrePillList from '../../components/GenrePillList.tsx';
import {StarIcon} from 'react-native-heroicons/solid';

const viewHeight: number = Dimensions.get('window').height;
function SeriesDetailsScreen(): React.JSX.Element {
  const route = useRoute();
  const {data, isLoading, isError} = useGetShowByIdQuery(route.params.seriesId);

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
    <ScrollView style={styles.detailsContainer}>
      <Image
        src={data.image.original}
        style={styles.showImageBackground}
        resizeMode="contain"
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
      />

      <View style={styles.showInfoContainer}>
        <Text style={styles.showTitle}>{data.name}</Text>

        <View style={styles.ratingsContainer}>
          <StarIcon color="#f5c518" size={30} />

          <Text style={styles.ratingText}>{data.rating.average}/10</Text>
        </View>

        <GenrePillList genres={data.genres} />

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 8,
            marginHorizontal: 8,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            At {data.schedule.time} on {data.schedule.days.join(', ')}
          </Text>

          <Text style={{color: 'white', fontSize: 18}}>
            Seasons: {data.totalSeasons} Episodes:
            {data.totalEpisodes}
          </Text>
        </View>

        <Text style={styles.subTitle}>Summary</Text>

        <HTMLView value={data.summary} stylesheet={styles} />

        <Text style={styles.subTitle}>Episodes</Text>

        <SeriesSeasonList seasons={data.seasons} />
      </View>
    </ScrollView>
  );
}

export default SeriesDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: '#282828',
    paddingHorizontal: 8,
  },
  showInfoContainer: {
    padding: 8,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 4,
  },
  showImageBackground: {
    height: viewHeight / 2,
  },
  showTitle: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  p: {
    color: 'white',
    fontSize: 18,
  },
  subTitle: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
});
