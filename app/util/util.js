import _ from 'lodash';

export function parseOpeningTimes (str = "") {
  var daysInWeek = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
  ];

  var ret = {};

  daysInWeek.forEach(function(dayName) {
    ret[dayName] = null;
  });

  str = (str || "").toLowerCase();

  var re = /([a-z]{3}(\-[a-z]{3})?):(\d{4}\-\d{4})/ig,
    match;

  var hasValue = false;

  while(null !== (match = re.exec(str))) {
    hasValue = true;

    var days = match[1].match(/[a-z]{3}/ig),
      times = match.pop().match(/\d{4}/ig);

    var day1 = days[0], day2 = days[1];

    var startTime = times[0], endTime = times[1];

    ret[day1] = {
      from: startTime,
      to: endTime,
    };

    if (day2) {
      var _iterate = function(fromIndex, toIndex) {
        var index = fromIndex;

        while ( toIndex >= index && daysInWeek.length > index) {
          ret[daysInWeek[index]] = {
            from: startTime,
            to: endTime
          };

          index++;
        }
      };

      var startDayIndex = _.indexOf(daysInWeek, day1),
        endDayIndex = _.indexOf(daysInWeek, day2);

      if (endDayIndex < startDayIndex) {
        _iterate(0, endDayIndex);
        _iterate(startDayIndex, daysInWeek.length - 1);
      } else {
        _iterate(startDayIndex, endDayIndex);
      }
    }
  };

  console.log(ret)

  return (hasValue) ? ret : null;
};
