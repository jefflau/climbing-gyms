import React from 'react';
import _ from 'lodash';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { parseOpeningTimes } from '../util/util';

const OpeningTimes = ({ data }) => {
  data = parseOpeningTimes(data);
  var times = _.map(data, function(val, key){
    let day;
    let time;

    switch (key) {
      case "sun":
        day = "Sunday:";
        break;
      case "mon":
        day = "Monday:";
        break;
      case "tue":
        day = "Tuesday:";
        break;
      case "wed":
        day = "Wednesday:";
        break;
      case "thu":
        day = "Thursday:";
        break;
      case "fri":
        day = "Friday:";
        break;
      case "sat":
        day = "Saturday:";
        break;
    }

    if(data[key]) {
      time = <Text style={styles.time}>{data[key].from} - {data[key].to}</Text>
    } else {
      time = <Text style={styles.time}>Closed</Text>
    }

    return (
      <View key={key}>
        <Text style={styles.day}>{day}</Text>
        {time}
      </View>
    )
  });

  return (
    <View style={styles.container}>
      {times}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  day: {
    color: 'white'
  },
  time: {
    color: 'white'
  }
})

export default OpeningTimes;
