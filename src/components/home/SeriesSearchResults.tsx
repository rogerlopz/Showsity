import {FlatList, Text, View} from 'react-native';
import SeriesPosterItem from './SeriesPosterItem.tsx';
import {useGetShowsBySearchQuery} from '../../services/shows.ts';

export default function SeriesSearchResults({searchText}) {
  const {data, isLoading, isError} = useGetShowsBySearchQuery(searchText);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Searching shows...</Text>
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
    <FlatList
      data={data}
      numColumns={2}
      ListEmptyComponent={<Text>No results found.</Text>}
      renderItem={({item}) => (
        <SeriesPosterItem show={item.show} key={item.show.name} />
      )}
    />
  );
}
