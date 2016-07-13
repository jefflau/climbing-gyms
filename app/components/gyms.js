import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

var gyms = [
  {
    name: 'Stone',
    tags: ['bouldering'],
    rentsShoes: true,
    description: "A bouldering gym!"
  },
  {
    name: 'Red Rock',
    tags: ['bouldering'],
    rentsShoes: true,
    description: "A bouldering gym!"
  }
]

class Main extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      gyms: ds.cloneWithRows(gyms)
    }
  }

  goToGym(gym){
    Actions.gym({title: gym.name})
  }

  renderGym(gym){
    return(
      <View style={styles.gym}>
        <TouchableHighlight onPress={this.goToGym.bind(this, gym)}>
          <Text style={styles.gymName}>{gym.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render(){
    console.log(this.props.routes);
    return (
      <View style={styles.container}>
        <ListView style={styles.gymContainer} dataSource={this.state.gyms} renderRow={this.renderGym.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gymContainer: {
    flexDirection: 'column',
    marginTop: 64
  },
  gym: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    padding: 20
  },
  gymName: {

  }
});

export default connect(({routes}) => ({routes}))(Main);
