import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const Filters = ({ filterBouldering, filterRoped, filterAll }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.filter} onPress={filterBouldering}>
      <Text style={styles.filterText}>Show Bouldering</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.filter} onPress={filterRoped}>
      <Text style={styles.filterText}>Show Roped</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.filter} onPress={filterAll}>
      <Text style={styles.filterText}>Show All</Text>
    </TouchableHighlight>
  </View>
) ;

const mapDispatchToProps = (dispatch) => ({
  filterBouldering(){
    dispatch({
      type: 'SHOW_BOULDERING'
    })
  },
  filterRoped(){
    dispatch({
      type: 'SHOW_ROPED'
    })
  },
  filterAll(){
    dispatch({
      type: 'SHOW_ALL'
    })
  }
})

let styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  filter: {
  },
  filterText: {
    color: 'black'
  }
})

export default connect(({gyms}) => ({gyms}), mapDispatchToProps)(Filters);
