import {Navigation} from 'react-native-navigation';
import {App} from './App';
import RegisterScreens from './src/Navigations/RegisterScreens';

//Register all screens
RegisterScreens();

Navigation.events().registerAppLaunchedListener(App);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {color: 'yellow'},
    background: {
      color: '#4d089a',
    },
    backButton: {
      color: 'yellow',
    },
  },
});
