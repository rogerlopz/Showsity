import {View} from 'react-native';
import {useState} from 'react';
import ShowList from '../../components/home/ShowList.tsx';
import SearchShowList from '../../components/home/SearchShowList.tsx';

export default function HomeScreen() {
  const [isSearchingShow, setIsSearchingShow] = useState(false);

  return (
    <View>
      <SearchShowList
        onSearchToggled={toggleStatus => setIsSearchingShow(toggleStatus)}
      />

      <ShowList isSearching={isSearchingShow} />
    </View>
  );
}
