import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetShowByIdQuery} from '../../services/shows.ts';
import {useNavigation, useRoute} from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
import SeriesSeasonList from '../../components/showDetails/SeriesSeasonList.tsx';
import GenrePillList from '../../components/GenrePillList.tsx';
import {StarIcon} from 'react-native-heroicons/solid';

const viewHeight: number = Dimensions.get('window').height;
function SeriesDetailsScreen(): React.JSX.Element {
  const route = useRoute();
  const navigation = useNavigation();
  const {data, isLoading, isError} = useGetShowByIdQuery(route.params.seriesId);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator color="white" size={30} />
        <Text style={styles.text}>Loading show details...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.text}>
          Whoops, looks like something went wrong. Try refreshing
        </Text>
      </View>
    );
  }

  if (data) {
    navigation.setOptions({title: data.name || ''});
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

          <Text style={styles.ratingText}>{data.rating.average || 0}/10</Text>
        </View>

        <GenrePillList genres={data.genres} />

        <Text style={styles.text}>
          At {data.schedule.time} on {data.schedule.days.join(', ')}
        </Text>

        <Text style={styles.text}>
          {`Seasons: ${data.totalSeasons} Episodes: ${data.totalEpisodes}`}
        </Text>

        <View style={styles.summaryContent}>
          <Text style={styles.subTitle}>Summary</Text>

          <HTMLView value={data.summary} stylesheet={styles} />
        </View>

        <Text style={styles.subTitle}>Episodes</Text>

        <SeriesSeasonList seasons={data.seasons} />
      </View>
    </ScrollView>
  );
}

export default SeriesDetailsScreen;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  detailsContainer: {
    backgroundColor: '#282828',
    paddingHorizontal: 8,
  },
  showInfoContainer: {
    paddingHorizontal: 8,
    marginBottom: 64,
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
  text: {
    color: 'white',
    fontSize: 18,
  },
  showImageBackground: {
    height: viewHeight / 2,
  },
  showTitle: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  summaryContent: {
    backgroundColor: '#504945',
    borderRadius: 16,
    marginTop: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
    marginBottom: 16,
  },
  p: {
    color: 'white',
    fontSize: 18,
  },
  subTitle: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
