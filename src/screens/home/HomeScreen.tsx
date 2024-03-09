import {useState} from 'react';
import SeriesList from '../../components/home/SeriesList.tsx';
import SearchSeriesList from '../../components/home/SearchSeriesList.tsx';

function HomeScreen() {
  const [isSearchingShow, setIsSearchingShow] = useState(false);

  return (
    <>
      <SearchSeriesList
        onSearchToggled={toggleStatus => setIsSearchingShow(toggleStatus)}
      />

      <SeriesList isSearching={isSearchingShow} />
    </>
  );
}

export default HomeScreen;
