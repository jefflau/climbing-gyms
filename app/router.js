import React from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import Gyms from './components/gyms';
import Gym from './components/gym';


const RouterWithRedux = connect()(Router);

const Routes = () => (
  <RouterWithRedux>
    <Scene key="gyms" title="Gyms" component={Gyms} initial={true}/>
    <Scene key="gym" component={Gym} />
  </RouterWithRedux>
);

export default Routes;
