import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import getMainImage from '../util/getGymImages';

const { height, width } = Dimensions.get('window');

const Gym = ({ gym }) => (
  <View style={styles.container}>
    <Image source={getMainImage(gym.slug)} style={styles.mainImage}/>
    <Text>{gym.description}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1
  },
  mainImage: {
    width: width,
    height: height/3
  }
});

export default connect(({routes}) => ({routes}))(Gym);
