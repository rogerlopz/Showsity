import {Button, FlatList, Text, View} from 'react-native';
import ShowListItem from './ShowListItem.tsx';
import {useState} from 'react';
import {useGetShowsQuery} from '../../services/shows.ts';

export default function ShowList({isSearching}: {isSearching: boolean}) {
  const [page, setPage] = useState(0);
  const {data, isLoading, isError} = useGetShowsQuery(page);

  if (isSearching) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading shows...</Text>
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
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <ShowListItem show={item} key={item.name} />}
        numColumns={2}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          margin: 16,
          height: 40,
        }}>
        <Button
          disabled={page === 0}
          onPress={() => setPage(page - 1)}
          title="Back"
        />
        <Button onPress={() => setPage(page + 1)} title="Next" />
      </View>
    </View>
  );
}
