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
          <Text style={styles.price}>{item.get('price')}</Text>
        </View>
      )
    )
    return (
      <View>
        <Text style={styles.header}>Entry Prices</Text>
        {showPrices}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    padding: 10,
    fontSize: 20
  },
  priceItem: {
    padding: 10,
  },
  type: {
    color: 'white',
  },
  price: {
    color: 'white',
  }
})

export default TicketPrices;
