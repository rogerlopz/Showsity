import {Image, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ShowListItem({show}: {show: any}) {
  const navigation = useNavigation();
  const goToShowDetails = () => {
    navigation.navigate('ShowDetails', {seriesId: show.id});
  };

  return (
    <TouchableHighlight style={styles.container} onPress={goToShowDetails}>
      <>
        <Image
          src={show.image?.medium}
          resizeMode="contain"
          style={styles.imageBackground}
        />
        <Text style={{color: 'black'}}>{show.name}</Text>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: 'auto',
    height: 295,
  },
});
