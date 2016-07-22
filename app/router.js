import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Router,
  Scene,
  WebView
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { colours } from './styles/globals';

import Gyms from './screens/gyms';
import Gym from './screens/gym';
import GoogleMaps from './screens/googleMaps';

const RouterWithRedux = connect()(Router);

const Routes = () => (
  <RouterWithRedux
    hideNavBar={false}
    titleStyle={styles.title}
    navigationBarStyle={styles.navBar}
    leftButtonIconStyle={styles.leftButton}
  >
    <Scene key="gyms" title="Gyms" component={Gyms} initial={true}/>
    <Scene key="gym" component={Gym} />
    <Scene key="googleMaps" component={GoogleMaps} />
  </RouterWithRedux>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colours.darkestGrey,
  },
  title: {
    color: 'white'
  },
  leftButton: {
    tintColor: 'white'
  }
})

export default Routes;
