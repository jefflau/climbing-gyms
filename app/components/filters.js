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
    let { filterBouldering, filterRoped, filterAll, onFilter } = this.props;

    switch(type){
      case this.props.gymFilter:
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
    let { filterBouldering, filterRoped, filterAll, onFilter } = this.props;
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.filter} onPress={this.handlePressFilter.bind(this, 'SHOW_BOULDERING')}>
          <Text style={styles.filterText}>Show Bouldering</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.filter} onPress={this.handlePressFilter.bind(this, 'SHOW_ROPED')}>
          <Text style={styles.filterText}>Show Roped</Text>
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
    marginTop: 64
  },
  filter: {
    backgroundColor: 'blue'
  },
  filterText: {
    color: 'black'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
