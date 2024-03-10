import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SeriesItem from './SeriesItem.tsx';
import {useState} from 'react';
import {useGetShowsQuery} from '../../services/shows.ts';
import CenterLoadingIndicator from '../common/CenterLoadingIndicator.tsx';
import CenterErrorMessage from '../common/CenterErrorMessage.tsx';
import SeriesListPagination from '../common/SeriesListPagination.tsx';

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
    return <CenterLoadingIndicator loadingText="Loading all TV Series..." />;
  }

  if (isError) {
    return (
      <CenterErrorMessage text="Whoops, looks like something went wrong" />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Series</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <SeriesItem show={item} key={item.name} />}
        numColumns={2}
        ListFooterComponent={
          <SeriesListPagination
            page={page}
            onPageChange={newPageNumber => setPage(newPageNumber)}
          />
        }
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
});

export default SeriesList;
