import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

const EpisodeDetailsModal = ({episode, modalVisible, onCloseModal}) => {
  if (!episode) {
    return null;
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        onCloseModal();
      }}>
      <View style={styles.container}>
        <Image
          style={styles.episodeImage}
          resizeMode="contain"
          src={episode.image.original}
        />

        <View style={styles.content}>
          <Text>{episode.name}</Text>
          <Text>Episode {episode.number}</Text>
          <Text>Season {episode.season}</Text>
          <HTMLView value={episode.summary} />
        </View>
        <Button onPress={() => onCloseModal()} title="Close" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 72,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  episodeImage: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default EpisodeDetailsModal;
