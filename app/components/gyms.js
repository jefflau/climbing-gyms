import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Filters from './filters';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Gym extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      in: true
    }
  }
  componentWillUnMount(){
    this.setState({
      in: false
    })
  }
  render () {
    let { gym, goToGym } = this.props;
    return (
      <View style={[styles.gym, styles.gymHeightWidth]}>
        <Image source={require('../img/stone/1.jpg')}
        tintColor='white' style={styles.gymHeightWidth}>
          <TouchableHighlight style={[styles.gymLink]} onPress={goToGym.bind(null, gym)}>
            <Text style={styles.gymName}>{gym.name}</Text>
          </TouchableHighlight>
        </Image>
      </View>
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
    Actions.gym({ gym, title: gym.name })
  }

  onFilter(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  renderGym(gym){
    return(
      <Gym gym={gym} goToGym={this.goToGym}/>
    )
  }

  render(){
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Filters onFilter={this.onFilter}>
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
