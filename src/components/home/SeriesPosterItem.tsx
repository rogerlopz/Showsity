import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SeriesPosterItem({show}: {show: any}) {
  const navigation = useNavigation();
  const goToShowDetails = () => {
    navigation.navigate('ShowDetails', {seriesId: show.id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToShowDetails}>
      <ImageBackground
        src={show.image?.medium}
        imageStyle={[styles.posterImage, {resizeMode: 'cover'}]}
        style={styles.backgroundPoster}>
        <View style={styles.titleBlur}>
          <Text style={styles.seriesTitle}>{show.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  backgroundPoster: {
    width: '100%',
    height: 295,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  posterImage: {
    borderRadius: 16,
  },
  seriesTitle: {
    marginLeft: 16,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleBlur: {
    minHeight: 50,
    backgroundColor: '#000',
    opacity: 0.8,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
});
