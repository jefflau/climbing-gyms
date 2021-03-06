import React from 'react';
import _ from 'lodash';
import {
  Picker,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import { filterCity, closeNavPopups } from '../actions/actions';

const { height, width } = Dimensions.get('window');

class CitySelect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: props.locationFilter
    }
  }
  onValueChange(key, value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState, ()=>{
      this.props.dispatch(filterCity(value));
      this.props.dispatch(closeNavPopups());
      this.props.filterAnimationSetup();
      Actions.refresh({
        title: _.capitalize(value) + " gyms"
      })
    });
  }
  render() {
    let { cities } = this.props;
    let citySelections = cities.map(city => (
      <Picker.Item key={city.get('id')} label={_.capitalize(city.get('name'))} value={city.get('id')} />
    ))
    return (
      <View style={styles.citySelectContainer}>
        <Picker
          style={styles.citySelect}
          selectedValue={this.state.selected}
          onValueChange={this.onValueChange.bind(this, 'selected')}>
          {citySelections}
          <Picker.Item key='all' label='All' value='all' />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  citySelectContainer: {
    width: width,
    height: 200
  },
  citySelect: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    height: 200
  },
})

export default connect()(CitySelect);
