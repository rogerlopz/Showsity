import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

type CenterLoadingIndicatorProps = {
  loadingText: string;
};
const CenterLoadingIndicator: React.FC<CenterLoadingIndicatorProps> = props => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator color="white" size={30} />
      <Text style={styles.text}>{props.loadingText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default CenterLoadingIndicator;
