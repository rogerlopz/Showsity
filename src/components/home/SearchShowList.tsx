import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import SeriesSearchResults from './SeriesSearchResults.tsx';
import useDebounce from '../../hooks/useDebounce.tsx';

export default function SearchShowList({onSearchToggled}) {
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
      <Button
        title="Back"
        onPress={() => {
          toggleSearch(false);
        }}
      />
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
          value={searchText}
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
    padding: 8,
    flexDirection: 'row',
  },
});
