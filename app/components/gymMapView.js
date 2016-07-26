import React from 'react';
import {
  MapView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  googleLink: {
    backgroundColor: 'black',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  googleLinkText: {
    color: 'white'
  },
})

class GymMapView extends React.Component {
  render() {
    let { location, address, height, width } = this.props;
    return (
      <View>
        <MapView
          style={[styles.map, {height: height, width: width}]}
          region={{
            longitude: location.get('longitude'),
            latitude: location.get('latitude'),
            longitudeDelta: 0.015,
            latitudeDelta: 0.015
          }}
          annotations={[location.toObject()]}
        />
        <TouchableOpacity style={styles.googleLink} onPress={()=> Actions.googleMaps({address: address, title: "Google Maps"})}>
          <Text style={styles.googleLinkText}>Link to Google</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GymMapView;
