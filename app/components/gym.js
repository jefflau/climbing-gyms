import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const Gym = () => (
  <View style={styles.container}>
    <Text>Gym View</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(({routes}) => ({routes}))(Gym);
