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

    console.log(gym.getIn(['location', 'longitude']), gym.getIn(['location', 'latitude']))
    let map = this.state.tab === 'map' ?
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
      : null;
    return(
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

const styles = StyleSheet.create({
  mainImage: {
    width: width,
    height: height/3
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
    height: 400,
    width: width
  }
});

export default connect(({routes}) => ({routes}))(Gym);
