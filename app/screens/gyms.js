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
import _ from 'lodash';
import getMainImage from '../util/getGymImages';

import Filters from '../components/filters';
import ViewContainer from '../components/viewContainer';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Gym extends React.Component {

  render () {
    let { gym, gym: { name, slug }, goToGym } = this.props;
    return (
      <View style={[styles.gym, styles.gymHeightWidth]}>
        <Image source={getMainImage(slug)}
        tintColor='white' style={styles.gymImage}>
          <TouchableHighlight style={[styles.gymLink]} onPress={goToGym.bind(null, gym)}>
            <Text style={styles.gymName}>{_.upperCase(name)}</Text>
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
      <ViewContainer>
        <Filters onFilter={this.onFilter}>
        </Filters>
        <ListView contentContainerStyle={styles.gymContainer} dataSource={ds.cloneWithRows(this.props.gyms)} renderRow={this.renderGym.bind(this)} />
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  gymContainer: {
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
  gymImage: {
    width: 156,
    height: 96
  },
  gym: {
    backgroundColor: 'skyblue',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 20,
    marginHorizontal: 8
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
    fontSize: 22
  }
});
export default connect(({routes, gyms}) => ({routes, gyms}))(Gyms);
