import {StyleSheet, Text, View} from 'react-native';

type GenrePillListProps = {
  genres?: string[];
};
const GenrePillList: React.FC<GenrePillListProps> = ({genres}) => {
  if (!genres || !genres.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {genres.map((genre, index) => (
        <View style={styles.genreContainer} key={`${genre}_${index}`}>
          <Text style={styles.genreTitle}>{genre}</Text>
        </View>
      ))}
    </View>
  );
};

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
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreTitle: {
    color: '#1d4ed8',
    fontSize: 16,
  },
});

export default GenrePillList;
