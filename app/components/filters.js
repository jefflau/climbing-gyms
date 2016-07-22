import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { showBouldering, showRoped, showAll} from '../actions/actions';

class Filters extends React.Component {
  handlePressFilter (type) {
    let { filterBouldering, filterRoped, filterAll, filterAnimationSetup, gymTypeFilter } = this.props;

    switch(type){
      case gymTypeFilter:
        filterAll();
        break;
      case 'SHOW_BOULDERING':
        filterBouldering();
        break;
      case 'SHOW_ROPED':
        filterRoped();
        break;
    }

    filterAnimationSetup();
  }
  render() {
    let { filterBouldering, filterRoped, filterAll, onFilter, gymTypeFilter } = this.props;
    return(
      <View style={styles.container}>
        <TouchableHighlight style={[styles.filter, gymTypeFilter === "SHOW_BOULDERING" ? styles.filterSelected : null]} onPress={this.handlePressFilter.bind(this, 'SHOW_BOULDERING')}>
          <Text style={[styles.filterText, gymTypeFilter === "SHOW_BOULDERING" ? styles.filterTextSelected : null]}>Bouldering</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.filter, gymTypeFilter === "SHOW_ROPED" ? styles.filterSelected : null]} onPress={this.handlePressFilter.bind(this, 'SHOW_ROPED')}>
          <Text style={[styles.filterText, gymTypeFilter === "SHOW_ROPED" ? styles.filterTextSelected : null]}>Roped</Text>
        </TouchableHighlight>
      </View>
    )
  } ;
}

const mapDispatchToProps = (dispatch) => ({
  filterBouldering(){
    dispatch(showBouldering())
  },
  filterRoped(){
    dispatch(showRoped())
  },
  filterAll(){
    dispatch(showAll())
  }
})

const mapStateToProps = ({gyms, gymTypeFilter}) => ({
  gyms,
  gymTypeFilter
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
