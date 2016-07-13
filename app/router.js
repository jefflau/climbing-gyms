import React from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import Main from './components/main';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="home" title="Home" component={Main} initial={true}/>
    </Scene>
  </Router>
)
