import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

class SignIn extends React.Component {
  goToFinalScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'FinalScreen',
        options: {
          topBar: {
            title: {
              text: 'Final Screen',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sign in to the final screen"
          onPress={() => this.goToFinalScreen()}></Button>
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

export default SignIn;
