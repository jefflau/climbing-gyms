import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class TicketPrices extends React.Component {
  render() {
    let { prices } = this.props;

    let showPrices = prices.map((item, i) => (
        <View key={i} style={styles.priceItem}>
          <Text style={styles.type}>{item.get('type')}</Text>
          <Text style={styles.price}>${item.get('price')} NTD</Text>
        </View>
      )
    )
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Entry Prices</Text>
        {showPrices}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    color: 'white',
    paddingBottom: 20,
    fontSize: 20
  },
  priceItem: {
    marginBottom: 5,
    flexDirection: 'row'
  },
  type: {
    color: 'white',
    flex: 1
  },
  price: {
    color: 'white',
    flex: 1
  }
})

export default TicketPrices;
