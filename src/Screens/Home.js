import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation, Modal as RNNModal} from 'react-native-navigation';
import {LoginRoot} from '../Navigations/Routes';
import ButtonComponent from '../Components/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  gotoScreen = ScreenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: ScreenName,
        options: {
          topBar: {
            title: {
              text: ScreenName,
            },
          },
        },
      },
    });
  };

  getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          this.setState({name: value});
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  removeData = () => {
    AsyncStorage.removeItem('UserName');
    Navigation.setRoot(LoginRoot);
  };

  toggleModal = () => this.setState({modalVisible: !this.state.modalVisible});

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Welcome {this.state.name}!</Text>
        <ButtonComponent
          title="Profile Screen"
          color="#710ce3"
          // onPressFunction={() => this.gotoScreen('Profile')}
          onPressFunction={this.toggleModal}
        />
        <ButtonComponent
          title="Log Out"
          color="#f40100"
          onPressFunction={this.removeData}
        />
        <RNNModal
          animationType="slide"
          blurOnUnmount={true}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}>
          <View style={styles.centerView}>
            <View style={styles.profileTitle}>
              <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.modalScreen}>
              <Text style={styles.modalText}>{this.state.name}</Text>
              <Text style={styles.modalText}>nabshr.ns@gmail.com</Text>
              <Text style={styles.modalText}>+977-9843756154</Text>
              <Text style={styles.modalText}>Kathmandu, Nepal</Text>
            </View>
            <View style={styles.dissmissButton}>
              <ButtonComponent
                title="Close"
                color="#e64f4e"
                onPressFunction={this.toggleModal}
              />
            </View>
          </View>
        </RNNModal>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  text: {
    margin: 50,
    fontSize: 35,
    color: '#2e2e2e',
    fontFamily: 'DancingScript-Regular',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTitle: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 5,
    backgroundColor: '#4d089a',
    borderRadius: 10,
  },
  dissmissButton: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 5,
    backgroundColor: '#e64f4e',
    borderRadius: 10,
  },
  profileText: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'IndieFlower-Regular',
  },
  modalScreen: {
    width: '80%',
    height: '60%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#d4beed',
  },
  modalText: {
    marginTop: 20,
    color: '#4b1985',
    fontFamily: 'DancingScript-Regular',
    fontSize: 35,
  },
});
