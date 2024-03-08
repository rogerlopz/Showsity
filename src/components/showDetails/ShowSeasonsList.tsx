import {StyleSheet, Text, View} from 'react-native';
import EpisodeList from './EpisodeList.tsx';
import EpisodeDetailsModal from './EpisodeDetailsModal.tsx';
import {useState} from 'react';

function ShowSeasonsList({seasons}: {seasons: []}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [episode, setEpisode] = useState(null);

  if (!seasons || !seasons.length) {
    return null;
  }

  function handleEpisodePress(episode) {
    setEpisode(episode);
    setModalVisible(true);
  }

  function handleModalClose() {
    setModalVisible(false);
    setEpisode(null);
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
            onEpisodePress={handleEpisodePress}
          />
        </View>
      ))}

      <EpisodeDetailsModal
        episode={episode}
        modalVisible={modalVisible}
        onCloseModal={handleModalClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seasonTitle: {
    fontSize: 24,
  },
});

export default ShowSeasonsList;
