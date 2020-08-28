import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {Navigation} from 'react-native-navigation';

class Welcome extends React.Component {
  /*Método para añadir un nuevo screen al stack del navegador, mediante método push(), 
  la cual recibe dos parámetros (id de la pila en donde "empujaremos la pantalla", screen que "empujaremos")
  */
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: screenName,
            },
          },
          /*animations: {
            push: {
              content: {
                x: {
                  from: 1000,
                  to: 0,
                  duration: 0,
                },
              },
            },
            pop: {
              content: {
                x: {
                  from: -1000,
                  to: 0,
                  duration: 0,
                },
              },
            },
          },*/
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#4d089a"
          title="Sign in"
          onPress={() => this.goToScreen('SignIn')}
        />
        <Button
          color="#4d089a"
          title="Sign up"
          onPress={() => this.goToScreen('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default Welcome;
