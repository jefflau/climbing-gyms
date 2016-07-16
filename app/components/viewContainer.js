import React from 'react';
import { View, StyleSheet } from 'react-native';

class ViewContainer extends React.Component {
  render() {
    let { children, style} = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    marginTop: 64,
  }
})

export default ViewContainer;
