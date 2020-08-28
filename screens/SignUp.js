import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up!!!</Text>
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

export default SignUp;