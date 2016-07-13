import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Gym = () => {
  console.log(this.props)
  return(
    <View style={styles.container}>
      <Text>Gym View</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Gym;
