import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import SeriesSearchResults from './SeriesSearchResults.tsx';
import useDebounce from '../../hooks/useDebounce.tsx';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';

export default function SearchSeriesList({onSearchToggled}) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 500);
  function searchShow(text: string) {
    setSearchText(text);
  }

  function toggleSearch(status: boolean) {
    setIsSearching(status);

    if (!status) {
      setSearchText('');
    }

    onSearchToggled(status);
  }

  function renderBackButton() {
    if (!isSearching) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          toggleSearch(false);
        }}>
        <ArrowLeftIcon color="black" />
      </TouchableOpacity>
    );
  }

  function renderSearchList() {
    if (!isSearching) {
      return null;
    }

    return <SeriesSearchResults searchText={debouncedSearch} />;
  }

  return (
    <View>
      <View style={styles.searchInputContainer}>
        {renderBackButton()}

        <TextInput
          style={styles.searchInput}
          value={searchText}
          placeholderTextColor="#000"
          placeholder="Search by TV Show name"
          onPressIn={() => toggleSearch(true)}
          onChangeText={searchShow}
        />
      </View>

      {renderSearchList()}
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    margin: 8,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  },
});
