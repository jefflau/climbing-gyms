import React from 'react';
import {
  View,
  WebView
} from 'react-native';
import ViewContainer from '../components/viewContainer';

const GoogleMaps = ({address}) => (
  <ViewContainer>
    <WebView source={{uri: `https://www.google.com/maps/place/${address}`}} />
  </ViewContainer>
)

export default GoogleMaps;
