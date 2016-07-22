import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Router,
  Scene,
  WebView
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { colours } from './styles/globals';
import { dispatch } from 'redux';

import Gyms from './screens/gyms';
import Gym from './screens/gym';
import GoogleMaps from './screens/googleMaps';

import { openCitySelect } from './actions/actions';

const Routes = ({ dispatch}) => (
  <Router
    hideNavBar={false}
    titleStyle={styles.title}
    navigationBarStyle={styles.navBar}
    leftButtonIconStyle={styles.leftButton}
  >
    <Scene key="gyms"
      title="Gyms"
      component={Gyms}
      initial={true}
      rightTitle={'City'}
      onRight={()=> dispatch(openCitySelect())}
    />
    <Scene key="gym" component={Gym} />
    <Scene key="googleMaps" component={GoogleMaps} />
  </Router>
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

export default connect()(Routes);
