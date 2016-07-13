import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Main extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Main component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Main;
