import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {XCircleIcon} from 'react-native-heroicons/solid';

const EpisodeDetailsModal = ({episode, modalVisible, onCloseModal}) => {
  if (!episode) {
    return null;
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => {
        onCloseModal();
      }}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Image
            style={styles.episodeImage}
            resizeMode="cover"
            src={episode.image?.original}
          />
          <Text style={[styles.text, styles.episodeTitle]}>{episode.name}</Text>

          <ScrollView contentContainerStyle={styles.content}>
            <Text
              style={[
                styles.text,
                styles.seasonsText,
              ]}>{`Episode ${episode.number} Season ${episode.season}`}</Text>

            <HTMLView value={episode.summary} stylesheet={styles} />
          </ScrollView>

          <TouchableOpacity
            onPress={() => onCloseModal()}
            style={styles.closeModalButton}>
            <XCircleIcon size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeModalButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#504945',
    borderRadius: 18,
    marginHorizontal: 32,
    maxHeight: 600,
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 8,
    paddingBottom: 64,
  },
  episodeImage: {
    width: 'auto',
    height: 200,
    borderRadius: 16,
  },
  text: {
    color: 'white',
  },
  seasonsText: {
    fontSize: 16,
    marginBottom: 8,
  },
  episodeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 12,
  },
  p: {
    color: 'white',
    fontSize: 18,
  },
});

export default EpisodeDetailsModal;
