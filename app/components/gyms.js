import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Filters from './filters';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


class Gyms extends React.Component {
  constructor(props){
    super(props);

  }

  goToGym(gym){
    Actions.gym({ gym, title: gym.name })
  }

  renderGym(gym){
    return(
      <View style={[styles.gym, styles.gymHeightWidth]}>
        <Image source={require('../img/stone/1.jpg')}
        tintColor='white' style={styles.gymHeightWidth}>
          <TouchableHighlight style={[styles.gymLink]} onPress={this.goToGym.bind(this, gym)}>
            <Text style={styles.gymName}>{gym.name}</Text>
          </TouchableHighlight>
        </Image>
      </View>
    )
  }

  render(){
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Filters>
        </Filters>
        <ListView contentContainerStyle={styles.gymContainer} dataSource={ds.cloneWithRows(this.props.gyms)} renderRow={this.renderGym.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gymContainer: {
    backgroundColor: 'skyblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 7,
    marginTop: 64,
    flexWrap: 'wrap'
  },
  gymHeightWidth: {
    width: 160,
    height: 100
  },
  gym: {
    backgroundColor: 'blue',
    marginTop: 20,
    marginHorizontal: 8
  },
  gymLink: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gymName: {
    color: 'white',
    fontSize: 22
  }
});

export default connect(({routes, gyms}) => ({routes, gyms}))(Gyms);
