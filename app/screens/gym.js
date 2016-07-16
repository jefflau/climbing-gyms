import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import getMainImage from '../util/getGymImages';
import { parseOpeningTimes } from '../util/util';

import ViewContainer from '../components/viewContainer';
import OpeningTimes from '../components/openingTimes';

const { height, width } = Dimensions.get('window');

const Gym = ({ gym }) => (
  <ViewContainer style={styles.container}>
    <Image source={getMainImage(gym.slug)} style={styles.mainImage}/>
    <View style={styles.mainContent}>
      <Text style={styles.description}>{gym.description}</Text>
      <OpeningTimes data={gym.openingTimes} />
    </View>
  </ViewContainer>
)

const styles = StyleSheet.create({
  mainImage: {
    width: width,
    height: height/3
  },
  mainContent: {
    padding: 10
  },
  description: {
    color: 'white'
  },
  openingTimes: {
    color: 'white'
  }
});

export default connect(({routes}) => ({routes}))(Gym);
