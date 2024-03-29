import {FlatList, StyleSheet, Text, View} from 'react-native';
import SeriesItem from './SeriesItem.tsx';
import {useGetShowsBySearchQuery} from '../../services/shows.ts';
import React from 'react';
import CenterLoadingIndicator from '../common/CenterLoadingIndicator.tsx';
import CenterErrorMessage from '../common/CenterErrorMessage.tsx';

type SeriesSearchResultsProps = {
  searchText: string;
};
const SeriesSearchResults: React.FC<SeriesSearchResultsProps> = ({
  searchText,
}) => {
  const {data, isLoading, isError} = useGetShowsBySearchQuery(searchText);

  if (isLoading) {
    return <CenterLoadingIndicator loadingText="Searching for shows..." />;
  }

  if (isError) {
    return (
      <CenterErrorMessage text="Whoops, looks like something went wrong." />
    );
  }

  return (
    <View style={styles.searchResultContainer}>
      <FlatList
        data={data}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        ListEmptyComponent={
          <View style={styles.centeredContainer}>
            <Text style={[styles.text, styles.emptyResultText]}>
              No results found
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <SeriesItem show={item.show} key={item.show.name} />
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
  searchResultContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#504945',
  },
  listContainer: {
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 64,
  },
  text: {
    color: '#fff',
  },
  seriesStateText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyResultText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SeriesSearchResults;
