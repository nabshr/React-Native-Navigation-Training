import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import TextInputComponent from '../Components/TextInputComponent';
import {TabRoute} from '../Navigations/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../Components/ButtonComponent';

class Login extends React.Component {
  // ---------------- Binding Side Menu ------------------------
  // static options() {
  //   return {
  //     topBar: {
  //       leftButtons: {
  //         id: 'sideMenu',
  //         text: 'Side Menu',
  //       },
  //     },
  //   };
  // }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <---------------- Binding Side Menu ------------------------
    // this.LoginOnPressHandler = this.LoginOnPressHandler.bind(this); <---- This can be used while rendering methods.
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          Navigation.setRoot(TabRoute);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------- Binding Side Menu ------------------------
  // navigationButtonPressed({buttonId}) {
  //   if (buttonId === 'sideMenu') {
  //     Navigation.mergeOptions(this.props.componentId, {
  //       sideMenu: {
  //         left: {
  //           visible: true,
  //         },
  //       },
  //     });
  //   }
  // }

  LoginOnPressHandler = async () => {
    if (this.state.name.length === 0) {
      Alert.alert('Warning!', 'Please write your name.');
    } else {
      try {
        await AsyncStorage.setItem('UserName', this.state.name);
        Navigation.setRoot(TabRoute);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Page</Text>
        <TextInputComponent
          topMargin={150}
          placeHolder="Enter your name."
          changeText={value => this.setState({name: value})}
        />
        <ButtonComponent
          title="Login"
          color="#4d089a"
          onPressFunction={this.LoginOnPressHandler}
        />
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#44aadb',
  },
  text: {
    margin: 50,
    fontSize: 50,
    color: '#fff',
  },
});
