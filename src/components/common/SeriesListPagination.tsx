import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

type SeriesListPaginationProps = {
  page: number;
  onPageChange(newPageNumber: number): void;
};
const SeriesListPagination: React.FC<SeriesListPaginationProps> = ({
  onPageChange,
  page,
}) => {
  return (
    <View style={styles.paginationContainer}>
      <Button
        disabled={page === 0}
        onPress={() => onPageChange(page - 1)}
        color="#504945"
        title="Previus"
      />
      <Button
        onPress={() => onPageChange(page + 1)}
        title="Next Page"
        color="#504945"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 32,
    height: 40,
  },
});

export default SeriesListPagination;
