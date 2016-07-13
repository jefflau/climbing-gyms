import React from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import Main from './components/main';

const RouterWithRedux = connect()(Router);

const Routes = () => (
  <RouterWithRedux>
    <Scene key="gyms" title="Gyms" component={Main} initial={true}/>
  </RouterWithRedux>
);

export default Routes;
