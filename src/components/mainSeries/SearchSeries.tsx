import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import SeriesSearchResults from './SeriesSearchResults.tsx';
import useDebounce from '../../hooks/useDebounce.tsx';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';

type SearchSeriesListProps = {
  onSearchToggled(toggleStatus: boolean): void;
};
const SearchSeries: React.FC<SearchSeriesListProps> = ({onSearchToggled}) => {
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
        }}
        style={styles.backButton}>
        <ArrowLeftIcon color="white" size={24} />
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
    <>
      <View style={styles.searchInputContainer}>
        <View style={styles.searchRow}>
          {renderBackButton()}

          <TextInput
            style={styles.searchInput}
            value={searchText}
            placeholderTextColor="#fff"
            placeholder="Search by TV Show name"
            onPressIn={() => toggleSearch(true)}
            onChangeText={searchShow}
          />
        </View>
      </View>

      {renderSearchList()}
    </>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    padding: 8,
    backgroundColor: '#282828',
    height: 70,
  },
  searchRow: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#504945',
    borderRadius: 32,
    paddingHorizontal: 4,
  },
  backButton: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 16,
    color: 'white',
    fontSize: 18,
  },
  searchListContainer: {
    height: '100%',
    backgroundColor: '#504945',
  },
});

export default SearchSeries;
