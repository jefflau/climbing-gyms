import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Filters extends React.Component {
  handlePressFilter (type) {
    let { filterBouldering, filterRoped, filterAll, onFilter, gymFilter } = this.props;

    switch(type){
      case gymFilter:
        filterAll();
        break;
      case 'SHOW_BOULDERING':
        filterBouldering();
        break;
      case 'SHOW_ROPED':
        filterRoped();
        break;
    }

    onFilter();
  }
  render() {
    let { filterBouldering, filterRoped, filterAll, onFilter, gymFilter } = this.props;
    return(
      <View style={styles.container}>
        <TouchableHighlight style={[styles.filter, gymFilter === "SHOW_BOULDERING" ? styles.filterSelected : null]} onPress={this.handlePressFilter.bind(this, 'SHOW_BOULDERING')}>
          <Text style={[styles.filterText, gymFilter === "SHOW_BOULDERING" ? styles.filterTextSelected : null]}>Bouldering</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.filter, gymFilter === "SHOW_ROPED" ? styles.filterSelected : null]} onPress={this.handlePressFilter.bind(this, 'SHOW_ROPED')}>
          <Text style={[styles.filterText, gymFilter === "SHOW_ROPED" ? styles.filterTextSelected : null]}>Roped</Text>
        </TouchableHighlight>
      </View>
    )
  } ;
}

const mapDispatchToProps = (dispatch) => ({
  filterBouldering(){
    dispatch({
      type: 'SHOW_BOULDERING'
    })
  },
  filterRoped(onFilter){
    dispatch({
      type: 'SHOW_ROPED'
    })
  },
  filterAll(onFilter){
    dispatch({
      type: 'SHOW_ALL'
    })
  }
})

const mapStateToProps = ({gyms, gymFilter}) => ({
  gyms,
  gymFilter
});

let styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  filter: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5
  },
  filterSelected: {
    borderColor: 'red',
  },
  filterText: {
    color: 'white'
  },
  filterTextSelected: {
    color: 'red',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
