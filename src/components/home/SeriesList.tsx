import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import SeriesPosterItem from './SeriesPosterItem.tsx';
import {useState} from 'react';
import {useGetShowsQuery} from '../../services/shows.ts';

type SeriesListProps = {
  isSearching: boolean;
};
const SeriesList: React.FC<SeriesListProps> = ({isSearching}) => {
  const [page, setPage] = useState(0);
  const {data, isLoading, isError} = useGetShowsQuery(page);

  if (isSearching) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Loading shows...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Whoops, looks like something went wrong. Try refreshing</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Series</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <SeriesPosterItem show={item} key={item.name} />
        )}
        numColumns={2}
        ListFooterComponent={() => (
          <View style={styles.paginationContainer}>
            <Button
              disabled={page === 0}
              onPress={() => setPage(page - 1)}
              color="#504945"
              title="Previus"
            />
            <Button
              onPress={() => setPage(page + 1)}
              title="Next Page"
              color="#504945"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#282828',
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 32,
    height: 40,
  },
});

export default SeriesList;
