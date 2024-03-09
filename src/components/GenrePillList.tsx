import {StyleSheet, Text, View} from 'react-native';

function GenrePillList({genres}: {genres: string[]}) {
  if (!genres.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {genres.map(genre => (
        <View style={styles.genreContainer}>
          <Text style={styles.genreTitle}>{genre}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
  },
  genreContainer: {
    backgroundColor: '#eff6ff',
    borderColor: '#1d4ed8',
    borderRadius: 15,
    borderWidth: 2,
    height: 30,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 'auto',
  },
  genreTitle: {
    color: '#1d4ed8',
    fontSize: 14,
  },
});

export default GenrePillList;
