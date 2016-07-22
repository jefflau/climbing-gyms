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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Gym extends React.Component {

  render () {
    let { gym, goToGym } = this.props;
    return (
      <View style={[styles.gym, styles.gymHeightWidth]}>
        <Image source={getMainImage(gym.get('slug'))}
        tintColor='white' style={styles.gymImage}>
          <TouchableHighlight style={[styles.gymLink]} onPress={goToGym.bind(null, gym)}>
            <Text style={styles.gymName}>{_.upperCase(gym.get('name'))}</Text>
          </TouchableHighlight>
        </Image>
      </View>
    )
  }
}

class CitySelect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: ''
    }
  }
  onValueChange(key, value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }
  render() {
    let citySelections = cities.map(city => (
      <Picker.Item label={_.capitalize(city)} value={city} />
    ))
    return (
      <Picker
        style={styles.citySelect}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this, 'selected')}>
        <Picker.Item label='All' value='' />
        {citySelections}
      </Picker>
    )
  }
}


class Gyms extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  }

  goToGym(gym){
    Actions.gym({ gym, title: gym.get('name') })
  }

  onFilter(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  renderGym(gym){
    return(
      <Gym gym={gym} goToGym={this.goToGym}/>
    )
  }

  citySelect(navPopup, cities){
    if(navPopup === 'OPEN_CITY_SELECT') {
      return <CitySelect cities={cities} />
    }
  }

  render(){
    let {navPopup, gyms} = this.props;
    return (
      <ViewContainer>
        <Filters onFilter={this.onFilter}>
        </Filters>
        <ListView contentContainerStyle={styles.gymContainer} dataSource={ds.cloneWithRows(gyms.toArray())} renderRow={this.renderGym.bind(this)} />
        {this.citySelect(navPopup)}
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

const filterGymsByLocation = (gyms, location) => {
  if(location) return gyms.filter(gym => gym.get('location') === location)
  return gyms;
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
  cities
})

let borderWidth = 2;
let gymWidth = width/2 - 25;
let gymHeight = gymWidth * 0.6;
let gymImageWidth = gymWidth - borderWidth*2;
let gymImageHeight = gymHeight - borderWidth*2;

const styles = StyleSheet.create({
  gymContainer: {
    flex: 1,
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
  citySelect: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});

export default connect(mapStateToProps)(Gyms);
