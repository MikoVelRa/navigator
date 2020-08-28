//Importamos componente
import {Navigation} from 'react-native-navigation';

import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import FinalScreen from './screens/FinalScreen';

//Registramos componentes del navegador
Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('SignIn', () => SignIn);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('FinalScreen', () => FinalScreen);

//Aquí es donde definimos la raíz del navegador
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      topBar: {
        title: 'Navigator',
      },
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Welcome',
            },
          },
        ],
      },
    },
  });
});

/*Definimos características del Navegador en modo de objeto
  componente:{
    característica: 'valor',    
  }
  componente:{
    característica: {
      atributo: 'valor'
    }
  }
*/
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      text: 'Navigator',
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  screen:{
    animationType: 'slide'
  }
});
