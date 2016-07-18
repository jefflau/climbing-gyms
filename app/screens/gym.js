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
          <Text style={styles.description}>{gym.description}</Text>
          <OpeningTimes data={gym.openingTimes} />
        </View>
      )
      : null
    let map = this.state.tab === 'map' ?
      <MapView
        style={styles.map}
        region={{
          ...gym.location,
          longitudeDelta: 0.015,
          latitudeDelta: 0.015
        }}
        annotations={[gym.location]}
      />
      : null;
    return(
      <ViewContainer style={styles.container}>
        <Image source={getMainImage(gym.slug)} style={styles.mainImage}/>
        <View style={styles.mainContent}>
          <View style={styles.tabs}>
            <TouchableOpacity style={[styles.tab, this.state.tab === 'info' ? styles.tabSelected: '']} onPress={()=> this.setState({tab: 'info'})}>
              <Text style={styles.tabText}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, this.state.tab === 'map'? styles.tabSelected: '']} onPress={()=> this.setState({tab: 'map'})}>
              <Text style={styles.tabText}>Map</Text>
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
    flexDirection: 'row'
  },
  tab: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  tabSelected: {
    backgroundColor: 'red'
  },
  tabText: {
    textAlign: 'center'
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
