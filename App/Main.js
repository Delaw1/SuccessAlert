import React, { Fragment } from 'react';
import { Router, Scene, Modal, Drawer, Actions } from 'react-native-router-flux'
import SplashScreen from 'react-native-splash-screen';
import index from './Component';
import alert from './Component/alert';
import network from './Component/network';
import about from './Component/about';
import login from './Component/login';
import register from './Component/register';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux'

class Main extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (Actions.state.index === 0) {
        BackHandler.exitApp()
        return false;
      }
      Actions.pop();
      return true
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="home" component={index} title="Home page" />
            <Scene key="alert" component={alert} title="My Alert" />
            <Scene key="network" component={network} title="Network"  />
            <Scene key="about" component={about} title="About Us" />
            <Scene key="login" component={login} title="Sign in" />
            <Scene key="register" component={register} title="Register Now" initial  />
          </Scene>
        </Router>
    );
  }
}


export default connect(null)(Main);
