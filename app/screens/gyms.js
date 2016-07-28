import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight,
  LayoutAnimation,
  Dimensions,
  Picker
} from 'react-native';
import Immutable from 'immutable';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
const { height, width } = Dimensions.get('window');

import getMainImage from '../util/getGymImages';

import Filters from '../components/filters';
import ViewContainer from '../components/viewContainer';
import CitySelect from '../components/citySelect';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Gym = ({ gym, goToGym }) =>  (
  <View style={[styles.gym, styles.gymHeightWidth]}>
    <Image source={getMainImage(gym.get('slug'))}
    tintColor='white' style={styles.gymImage}>
      <TouchableHighlight style={[styles.gymLink]} onPress={goToGym.bind(null, gym)}>
        <Text style={styles.gymName}>{_.upperCase(gym.get('name'))}</Text>
      </TouchableHighlight>
    </Image>
  </View>
)


class Gyms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.gyms.toArray())
    }
  }

  componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.gyms.toArray())
    })
  }

  goToGym(gym){
    Actions.gym({ gym, title: gym.get('name') })
  }

  filterAnimationSetup(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  renderGym(gym){
    return(
      <Gym gym={gym} goToGym={this.goToGym}/>
    )
  }

  citySelect(navPopup, cities){
    if(navPopup === 'TOGGLE_CITY_SELECT') {
      return <CitySelect filterAnimationSetup={this.filterAnimationSetup} cities={cities} locationFilter={this.props.locationFilter}/>
    } else {
      return null;
    }
  }

  render(){
    let { navPopup, gyms, cities } = this.props;
    console.log(gyms.toArray())
    return (
      <ViewContainer>
        <Filters filterAnimationSetup={this.filterAnimationSetup}>
        </Filters>
        <ListView
           style={{flex: 1}}
           contentContainerStyle={styles.gymContainer} dataSource={this.state.dataSource} renderRow={this.renderGym.bind(this)}
           enableEmptySections={true}

          />
         {this.citySelect(navPopup, cities)}
      </ViewContainer>
    )
  }
}

const filterGymsByType = (gyms, gymTypeFilter) => {
  switch(gymTypeFilter){
    case 'SHOW_BOULDERING':
      return gyms.filter(gym => gym.get('tags').includes('bouldering'))
    case 'SHOW_ROPED':
      return gyms.filter(gym => gym.get('tags').includes('roped'))
    case 'SHOW_ALL':
      return gyms;
  }
}

const filterGymsByLocation = (gyms, locationFilter) => {
  switch(locationFilter){
    case 'all':
      return gyms;
    default:
      return gyms.filter(gym => gym.get('city') === locationFilter)
  }
}

const filterGyms = (gyms, gymTypeFilter, locationFilter) => {
  return filterGymsByLocation(filterGymsByType(gyms, gymTypeFilter), locationFilter)
}

const mapStateToProps = ({
  routes,
  gyms,
  locationFilter,
  gymTypeFilter,
  navPopup,
  cities
}) => ({
  routes,
  gyms: filterGyms(gyms, gymTypeFilter, locationFilter),
  navPopup,
  locationFilter,
  cities
})

let borderWidth = 2;
let gymWidth = width/2 - 25;
let gymHeight = gymWidth * 0.6;
let gymImageWidth = gymWidth - borderWidth*2;
let gymImageHeight = gymHeight - borderWidth*2;

const styles = StyleSheet.create({
  gymContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 7,
    flexWrap: 'wrap'
  },
  gymHeightWidth: {
    width: gymWidth,
    height: gymHeight
  },
  gymImage: {
    width: gymImageWidth,
    height: gymImageHeight
  },
  gym: {
    backgroundColor: 'skyblue',
    borderColor: 'white',
    borderWidth: borderWidth,
    marginBottom: 18,
    marginHorizontal: 8,
  },
  gymLink: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gymName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps)(Gyms);
