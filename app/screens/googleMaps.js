import React from 'react';
import {
  View,
  WebView
} from 'react-native';

const GoogleMaps = ({address}) => (
  <WebView source={{uri: `https://www.google.com/maps/place/${address}`}}
/>
)

export default GoogleMaps;
