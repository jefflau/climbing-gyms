import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import getMainImage from '../util/getGymImages';
import { parseOpeningTimes } from '../util/util';

import ViewContainer from '../components/viewContainer';
import OpeningTimes from '../components/openingTimes';
import TicketPrices from '../components/ticketPrices';
import GymMapView from '../components/gymMapView';
import { colours } from '../styles/globals';
const { height, width } = Dimensions.get('window');

const statusBarHeight = 64,
      tabHeight = 40,
      mainImageHeight = height/3,
      contentHeight = height/3 * 2 - tabHeight - statusBarHeight,
      mapHeight = contentHeight;

const Credit = ({credits}) => ( credits ? <Text style={styles.credit}>{credits}</Text> : null);

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
        <ScrollView style={styles.infoContainer}>
          <Text style={styles.description}>{gym.get('description')}</Text>
          <OpeningTimes data={gym.get('openingTimes')} />
          <TicketPrices prices={gym.get('prices')} />
          <Credit credits={gym.get('credits')}/>
        </ScrollView>
      )
      : null

    let map = this.state.tab === 'map' ?
      <GymMapView
        location={gym.get('location')}
        address={gym.get('address')}
        height={mapHeight}
        width={width}
      />
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
  infoContainer: {
    height: contentHeight
  },
  description: {
    color: 'white',
    padding: 10
  },
  openingTimes: {
    color: 'white',
    padding: 10
  },
  credit: {
    color: 'white',
    padding: 10
  }
});

export default connect(({routes}) => ({routes}))(Gym);
