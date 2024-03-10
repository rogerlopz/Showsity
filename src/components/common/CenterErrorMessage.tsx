import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CenterErrorMessageProps = {
  text: string;
};
const CenterErrorMessage: React.FC<CenterErrorMessageProps> = props => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.text}>{props.text}</Text>
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

export default CenterErrorMessage;
