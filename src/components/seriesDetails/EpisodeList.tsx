import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Episode} from '../../services/types.ts';

type EpisodeListProps = {
  episodes: Episode[];
  onEpisodePress(episode: Episode): void;
};
const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  onEpisodePress,
}) => {
  function episodeSeparator() {
    return <View style={styles.separator} />;
  }

  return (
    <FlatList
      data={episodes}
      horizontal
      ItemSeparatorComponent={episodeSeparator}
      renderItem={({item}) => (
        <TouchableOpacity
          key={`${item.name}`}
          style={styles.episodeContainer}
          onPress={() => {
            onEpisodePress(item);
          }}>
          <View style={styles.episodeInformation}>
            <Image
              src={item.image?.medium}
              resizeMode="cover"
              style={styles.episodeImage}
            />

            <Text style={styles.episodeName}>
              Ep.{item.number} {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  episodeContainer: {
    maxWidth: 170,
    minWidth: 170,
    height: 160,
    maxHeight: 200,
  },
  separator: {
    width: 8,
  },
  episodeInformation: {
    flex: 1,
    flexDirection: 'column',
  },
  episodeImage: {
    height: 100,
    width: 160,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  episodeName: {
    paddingHorizontal: 4,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EpisodeList;
