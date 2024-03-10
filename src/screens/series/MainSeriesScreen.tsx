import React from 'react';
import {useState} from 'react';
import SeriesList from '../../components/mainSeries/SeriesList.tsx';
import SearchSeries from '../../components/mainSeries/SearchSeries.tsx';

const MainSeriesScreen: React.FC = () => {
  const [isSearchingShow, setIsSearchingShow] = useState(false);

  return (
    <>
      <SearchSeries
        onSearchToggled={toggleStatus => setIsSearchingShow(toggleStatus)}
      />

      <SeriesList isSearching={isSearchingShow} />
    </>
  );
};

export default MainSeriesScreen;
