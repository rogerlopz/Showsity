import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useGetShowsQuery} from '../../services/shows.ts';
import {useState} from 'react';
import ShowListItem from '../../components/home/ShowListItem.tsx';

export default function HomeScreen() {
  const [page, setPage] = useState(0);
  const {data, isLoading, isError} = useGetShowsQuery(page);

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
      <TextInput placeholder="Search by TV show name" />
      <FlatList
        data={data}
        renderItem={({item}) => <ShowListItem show={item} key={item.name} />}
        numColumns={2}
        ListFooterComponent={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: 16,
            }}>
            <Button
              disabled={page === 0}
              onPress={() => setPage(page - 1)}
              title="Back"
            />
            <Button onPress={() => setPage(page + 1)} title="Next" />
          </View>
        }
      />
    </View>
  );
}
