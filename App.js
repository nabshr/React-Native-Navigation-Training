import {Navigation} from 'react-native-navigation';
import {LoginRoot, TabRoute} from './src/Navigations/Routes';

function IsLoggedIn() {
  return false;
}

export function App() {
  Navigation.setRoot(IsLoggedIn() ? TabRoute : LoginRoot);
}
