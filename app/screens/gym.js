import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  MapView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import getMainImage from '../util/getGymImages';
import { parseOpeningTimes } from '../util/util';

import ViewContainer from '../components/viewContainer';
import OpeningTimes from '../components/openingTimes';
import { colours } from '../styles/globals';
const { height, width } = Dimensions.get('window');

class Gym extends React.Component{
  constructor(props){
    super()
    this.state = {
      tab: 'info'
    }
  }
  render(){
    let { gym } = this.props;
    let info = this.state.tab === 'info' ?
      (
        <View>
          <Text style={styles.description}>{gym.get('description')}</Text>
          <OpeningTimes data={gym.get('openingTimes')} />
        </View>
      )
      : null

    let map = this.state.tab === 'map' ?
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            longitude: gym.getIn(['location', 'longitude']),
            latitude: gym.getIn(['location', 'latitude']),
            longitudeDelta: 0.015,
            latitudeDelta: 0.015
          }}
          annotations={[gym.get('location').toObject()]}
        />
        <TouchableOpacity style={styles.googleLink} onPress={()=> Actions.googleMaps({address: gym.get('address'), title: "Google Maps"})}>
          <Text style={styles.googleLinkText}>Link to Google</Text>
        </TouchableOpacity>
      </View>
      : null;
    return (
      <ViewContainer style={styles.container}>
        <Image source={getMainImage(gym.get('slug'))} style={styles.mainImage}/>
        <View style={styles.mainContent}>
          <View style={styles.tabs}>
            <TouchableOpacity style={[styles.tab, this.state.tab === 'info' ? styles.tabSelected: '']} onPress={()=> this.setState({tab: 'info'})}>
              <Text style={[styles.tabText, this.state.tab ==='info' ? styles.tabTextSelected : '']}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, this.state.tab === 'map'? styles.tabSelected: '']} onPress={()=> this.setState({tab: 'map'})}>
              <Text style={[styles.tabText, this.state.tab ==='map' ? styles.tabTextSelected : '']}>Map</Text>
            </TouchableOpacity>
          </View>

          {info}
          {map}
        </View>
      </ViewContainer>
    )
  }
}
const statusBarHeight = 64,
      tabHeight = 40,
      mainImageHeight = height/3,
      mapHeight = height/3 * 2 - tabHeight - statusBarHeight;

const styles = StyleSheet.create({
  mainImage: {
    width: width,
    height: mainImageHeight
  },
  mainContent: {
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: colours.darkestGrey,
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    height: 40,
  },
  tabSelected: {
    backgroundColor: 'white'
  },
  tabText: {
    textAlign: 'center',
    color: 'white'
  },
  tabTextSelected: {
    color: 'black',
  },
  description: {
    color: 'white',
    padding: 10
  },
  openingTimes: {
    color: 'white',
    padding: 10
  },
  map: {
    height: mapHeight,
    width: width
  },
  mapContainer: {

  },
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
});

export default connect(({routes}) => ({routes}))(Gym);
