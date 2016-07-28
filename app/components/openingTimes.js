import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { parseOpeningTimes } from '../util/util';

import LocalizedStrings from 'react-native-localization';


let days = new LocalizedStrings({
  en:{
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday'
  },
  'zh-Hant': {
    mon: '週一',
    tue: '週二',
    wed: '週三',
    thu: '週四',
    fri: '週五',
    sat: '週六',
    sun: '週日'
  }
});

const formatTime = (time) => moment(time, 'HHmm').format('HH:mm');

const OpeningTimes = ({ data }) => {
  data = parseOpeningTimes(data);

  var times = _.map(data, function(val, key){
    let day;
    let time;

    switch (key) {
      case "sun":
        day = days.sun + ':';
        break;
      case "mon":
        day = days.mon + ':';
        break;
      case "tue":
        day = days.tue + ':';
        break;
      case "wed":
        day = days.wed + ':';
        break;
      case "thu":
        day = days.thu + ':';
        break;
      case "fri":
        day = days.fri + ':';
        break;
      case "sat":
        day = days.sat + ':';
        break;
    }

    if(data[key]) {
      time = <Text style={styles.time}>{formatTime(data[key].from)} - {formatTime(data[key].to)}</Text>
    } else {
      time = <Text style={styles.time}>Closed</Text>
    }

    return (
      <View key={key} style={styles.row}>
        <Text style={styles.day}>{day}</Text>
        {time}
      </View>
    )
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opening Times</Text>
      {times}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    color: 'white',
    paddingBottom: 20,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  day: {
    flex: 1,
    color: 'white',
  },
  time: {
    flex: 1,
    color: 'white',
  }
})

export default OpeningTimes;
