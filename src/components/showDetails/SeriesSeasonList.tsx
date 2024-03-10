import {StyleSheet, Text, View} from 'react-native';
import EpisodeList from './EpisodeList.tsx';
import EpisodeDetailsModal from './EpisodeDetailsModal.tsx';
import {useState} from 'react';
import {Episode, SeasonsWithEpisodes} from '../../services/types.ts';

type SeriesSeasonList = {
  seasons: SeasonsWithEpisodes[];
};

const SeriesSeasonList: React.FC<SeriesSeasonList> = ({seasons}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>();

  if (!seasons || !seasons.length) {
    return null;
  }

  function handleEpisodePress(episode: Episode) {
    setSelectedEpisode(episode);
    setModalVisible(true);
  }

  function handleModalClose() {
    setModalVisible(false);
    setSelectedEpisode(null);
  }

  return (
    <View style={styles.container}>
      {seasons.map(({season, episodes}, index) => (
        <View key={`${season.name}_${index}`}>
          <Text style={styles.seasonTitle}>
            Season {season.number} {season.name}
          </Text>

          <EpisodeList
            episodes={episodes}
            onEpisodePress={episode => handleEpisodePress(episode)}
          />
        </View>
      ))}

      <EpisodeDetailsModal
        episode={selectedEpisode}
        modalVisible={modalVisible}
        onCloseModal={handleModalClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seasonTitle: {
    fontSize: 32,
    color: 'white',
    marginTop: 8,
    marginBottom: 8,
  },
});

export default SeriesSeasonList;
