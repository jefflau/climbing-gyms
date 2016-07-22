import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableHighlight,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import Immutable from 'immutable';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
const { height, width } = Dimensions.get('window');

import getMainImage from '../util/getGymImages';

import Filters from '../components/filters';
import ViewContainer from '../components/viewContainer';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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

  render(){
    return (
      <ViewContainer>
        <Filters onFilter={this.onFilter}>
        </Filters>
        <ListView contentContainerStyle={styles.gymContainer} dataSource={ds.cloneWithRows(this.props.gyms.toArray())} renderRow={this.renderGym.bind(this)} />
      </ViewContainer>
    )
  }
}

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
  }
});
export default connect(({routes, gyms}) => ({routes, gyms}))(Gyms);
