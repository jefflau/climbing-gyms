import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import getMainImage from '../util/getGymImages';

import ViewContainer from '../components/viewContainer';

const { height, width } = Dimensions.get('window');

const Gym = ({ gym }) => (
  <ViewContainer style={styles.container}>
    <Image source={getMainImage(gym.slug)} style={styles.mainImage}/>
    <Text>{gym.description}</Text>
  </ViewContainer>
)

const styles = StyleSheet.create({
  mainImage: {
    width: width,
    height: height/3
  }
});

export default connect(({routes}) => ({routes}))(Gym);
