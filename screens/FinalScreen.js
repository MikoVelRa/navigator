import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class FinalScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the final screen!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FinalScreen;