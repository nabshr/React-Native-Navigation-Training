import {Navigation} from 'react-native-navigation';
import {Explore, Home, Profile, Login} from '../Screens';

export default function () {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Profile', () => Profile);
  Navigation.registerComponent('Explore', () => Explore);
  Navigation.registerComponent('Login', () => Login);
}
