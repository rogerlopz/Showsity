import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function EpisodeList({episodes, onEpisodePress}) {
  return (
    <View>
      {episodes.map((episode, index) => (
        <TouchableHighlight
          key={`${episode.name}_${index}`}
          onPress={() => {
            onEpisodePress(episode);
          }}>
          <View style={styles.episodeContainer}>
            <Image
              src={episode.image?.medium}
              resizeMode="contain"
              style={styles.episodeImage}
            />

            <Text style={{color: 'black'}}>Ep. {episode.number}</Text>

            <Text style={{color: 'black'}}>{episode.name}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  episodeContainer: {
    flexDirection: 'row',
  },
  episodeImage: {
    height: 146,
    width: 140,
  },
});

export default EpisodeList;
