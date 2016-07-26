import Immutable from 'immutable'

const s = new LocalizedStrings({
  en:{
    dayPass: 'Weekday Pass',
    weekendPass: 'Weekend Pass',
    ticketPack: '30 Ticket Pack',
    seasonPass: '3 Month Pass',
    halfYearPass: '6 month Pass',
    studentPass: 'Student Day Pass',
    student10Pack: 'Student Ticket Pack (10)'
  },
  'zh-Hant': {
    dayPass: '平日',
    weekendPass: '假日',
    ticketPack: '30張套票'，
    seasonPass: '季卡',
    halfYearPass: '半年卡',
    studentPass: '學生票',
    student10Pack: '10張學生套票'
  }
});

const gymsFixtures = [
  {
    name: 'Stone',
    slug: 'stone',
    tags: ['bouldering'],
    mainImage: '/app/img/stone/main.jpg',
    rentsShoes: true,
    description: "A bouldering gym! 5 metre high walls, with all different variations of walls. Lots of different types of holds and good routesetting makes this a prime place to go bouldering in Taiwan.",
    address: '新北市新莊區三和路58-12號',
    city: 'taipei',
    location: {
      latitude: 25.03901,
      longitude: 121.43757
    },
    facebook: 'https://www.facebook.com/StoneBoulderingGym/',
    openingTimes: "Mon-Fri:0900-2300,Sat:1100-2100,Sun:1100-1900",
    belayCardRequired: null,
  },
  {
    name: 'Red Rock',
    slug: 'redrock',
    tags: ['bouldering'],
    mainImage: '/app/img/stone/main.jpg',
    rentsShoes: true,
    description: "A bouldering gym!",
    address: '承德路四段261號B1',
    city: 'taipei',
    location: {
      latitude: 25.08963,
      longitude: 121.52058
    },
    facebook: 'https://www.facebook.com/redrocktaiwan/?fref=ts',
    openingTimes: 'Mon-Fri:1600-2230,Sat-Sun:0900-2100',
    belayCardRequired: null,
  },
  {
    name: 'Y17',
    slug: 'y17',
    tags: ['top roping', 'roped'],
    mainImage: '/app/img/stone/main.jpg',
    rentsShoes: true,
    description: "A Roped gym!",
    address: '台北市仁愛路一段17號',
    city: 'taipei',
    location: {
      latitude: 25.03906,
      longitude: 121.52200
    },
    facebook: 'https://www.facebook.com/groups/212551538862289/',
    openingTimes: 'Mon-Sun:0900-2130',
    openingTimesExtra: 'Sessions split up into 3 periods. 9:00-12:00, 13:30-17:00, 18:00-21:30',
    belayCardRequired: true,
  },
  {
    name: 'Xin Yi',
    slug: 'xinyi',
    tags: ['bouldering'],
    mainImage: '/app/img/stone/main.jpg',
    rentsShoes: false,
    description: "High walls, but routesetting has been lacking and not a lot of different holds",
    address: '110 台北市信義區松勤街100號 7F',
    city: 'taipei',
    location: {
      latitude:25.03187,
      longitude:121.56668
    },
    openingTimes: 'Mon-Sun:1400-2200',
    openingTimesExtra: 'Closes for an hour from 17:00-18:00',
    facebook: 'https://www.facebook.com/boulderinggym.xinyi/',
    belayCardRequired: null
  },
  {
    name: 'Civic',
    slug: 'civic',
    tags: ['bouldering'],
    mainImage: '/app/img/stone/main.jpg',
    rentsShoes: true,
    description: "Great space, but lack of management",
    address: '南港區市民大道8段552號',
    city: 'taipei',
    location: {
      latitude: 25.05392,
      longitude: 121.61385
    },
    facebook: 'https://www.facebook.com/CivicBouldergymTaipei/',
    openingTimes: 'Mon-Fri:1000-2200,Sat-Sun:1000-1800',
    belayCardRequired: null,
  },
  {
    name: 'Neihu',
    slug: 'neihu',
    tags: ['top roping', 'roped', 'lead'],
    mainImage: '/app/img/stone/main.jpg',
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Sun:0900-2200',
    description: "Great overhang",
    address: '台北市內湖區洲子街12號',
    city: 'taipei',
    location: {
      latitude: 25.07827,
      longitude: 121.57523
    },
    facebook: 'https://www.facebook.com/climbing.nh/',
    belayCardRequired: true
  },
  {
    name: 'Bonus',
    slug: 'bonus',
    tags: ['bouldering', 'hostel'],
    mainImage: '/app/img/bonus/main.jpg',
    rent: [],
    openingTimes: 'Mon-Tue:1800-2200,Wed:1400-2200,Thu-Fri:1800-2200',
    openingTimesExtra: "Saturday and Friday are for climbers and needs advance booking",
    description: "Small, but cosy bouldering gym located close to Hua Lien station. It also doubles as a hostel for climbers, with 4 double bedrooms",
    address: '花蓮市國民一街38號3F',
    city: 'hualien',
    location: {
      latitude: 25.07827,
      longitude: 121.57523
    },
    facebook: 'https://www.facebook.com/bonushualien/?fref=ts',
    belayCardRequired: null
  }
];

const citiesFixtures = ['hualien', 'taipei'];

export const gyms = Immutable.fromJS(gymsFixtures);
export const cities = Immutable.fromJS(citiesFixtures);
