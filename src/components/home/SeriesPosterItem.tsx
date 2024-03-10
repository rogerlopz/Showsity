import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ShowDetailsNavigationProp} from '../../navigation/types.ts';

const SeriesPosterItem: React.FC<any> = ({show}) => {
  const navigation = useNavigation<ShowDetailsNavigationProp>();
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 4,
  },
  titleBlur: {
    minHeight: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
});

export default SeriesPosterItem;
