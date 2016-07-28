import Immutable from 'immutable';
import LocalizedStrings from 'react-native-localization';

const s = new LocalizedStrings({
  en:{
    dayPass: 'Weekday Pass',
    weekendPass: 'Weekend Pass',
    ticketPack: '30 Ticket Pack',
    ticketPack20: '20 Ticket Pack',
    seasonPass: '3 Month Pass',
    halfYearPass: '6 month Pass',
    studentPass: 'Student Day Pass',
    student10Pack: 'Student Ticket Pack (10)'
  },
  'zh-Hant': {
    dayPass: '平日',
    weekendPass: '假日',
    ticketPack: '30張套票',
    ticketPack20: '20張套票',
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
    prices: [
      {
        type: s.dayPass,
        price: 200,
      },
      {
        type: s.weekendPass,
        price: 250,
      },
      {
        type: s.ticketPack,
        price: 4800,
      },
      {
        type: s.seasonPass,
        price: 3600
      },
      {
        type: s.halfYearPass,
        price: 6000
      },
      {
        type: s.studentPass,
        price: 160
      },
      {
        type: s.student10Pack,
        price: 1400
      }
    ]
  },
  {
    name: 'Red Rock',
    slug: 'redrock',
    tags: ['bouldering'],
    rentsShoes: true,
    description: "A bouldering gym!",
    address: '承德路四段261號B1',
    city: 'taipei',
    location: {
      latitude: 25.08963,
      longitude: 121.52058
    },
    prices: [
      {
        type: s.dayPass,
        price: 250,
      },
      {
        type: s.studentPass,
        price: 220
      }
    ],
    facebook: 'https://www.facebook.com/redrocktaiwan/?fref=ts',
    openingTimes: 'Mon-Fri:1600-2230,Sat-Sun:0900-2100',
    belayCardRequired: null,
  },
  {
    name: 'Y17',
    slug: 'y17',
    tags: ['top roping', 'roped'],
    rentsShoes: true,
    description: "A Roped gym!",
    address: '台北市仁愛路一段17號',
    city: 'taipei',
    location: {
      latitude: 25.03906,
      longitude: 121.52200
    },
    prices: [
      {
        type: s.dayPass,
        price: 170,
      }
    ],
    facebook: 'https://www.facebook.com/groups/212551538862289/',
    openingTimes: 'Mon-Sun:0900-2130',
    openingTimesExtra: 'Sessions split up into 3 periods. 9:00-12:00, 13:30-17:00, 18:00-21:30',
    belayCardRequired: true,
  },
  {
    name: 'Xin Yi',
    slug: 'xinyi',
    tags: ['bouldering'],
    rentsShoes: false,
    description: "High walls, but routesetting has been lacking and not a lot of different holds",
    address: '110 台北市信義區松勤街100號 7F',
    city: 'taipei',
    location: {
      latitude:25.03187,
      longitude:121.56668
    },
    prices: [
      {
        type: s.dayPass,
        price: 170,
      }
    ],
    openingTimes: 'Mon-Sun:1400-2200',
    openingTimesExtra: 'Closes for an hour from 17:00-18:00',
    facebook: 'https://www.facebook.com/boulderinggym.xinyi/',
    belayCardRequired: null
  },
  {
    name: 'Civic',
    slug: 'civic',
    tags: ['bouldering'],
    rentsShoes: true,
    description: "Great space, but lack of management",
    address: '南港區市民大道8段552號',
    city: 'taipei',
    location: {
      latitude: 25.05392,
      longitude: 121.61385
    },
    prices: [
      {
        type: s.dayPass,
        price: 200,
      }
    ],
    facebook: 'https://www.facebook.com/CivicBouldergymTaipei/',
    openingTimes: 'Mon-Fri:1000-2200,Sat-Sun:1000-1800',
    belayCardRequired: null,
  },
  {
    name: 'Neihu',
    slug: 'neihu',
    tags: ['top roping', 'roped', 'lead'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Sun:0900-2200',
    description: "Great overhang",
    address: '台北市內湖區洲子街12號',
    city: 'taipei',
    location: {
      latitude: 25.07827,
      longitude: 121.57523
    },
    prices: [
      {
        type: s.dayPass,
        price: 170,
      }
    ],
    facebook: 'https://www.facebook.com/climbing.nh/',
    belayCardRequired: true
  },
  {
    name: 'Bonus',
    slug: 'bonus',
    tags: ['bouldering', 'hostel'],
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
    prices: [
      {
        type: s.dayPass,
        price: 220,
      }
    ],
    facebook: 'https://www.facebook.com/bonushualien/?fref=ts',
    belayCardRequired: null
  },
  {
    name: 'Danshui',
    slug: 'danshui-sportcenter',
    tags: ['top roping', 'roped', 'lead'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Sun:0900-2200',
    description: "Great overhang",
    address: '新北市淡水國民運動中心',
    city: 'taipei',
    location: {
      latitude: 25.18664,
      longitude: 121.44326
    },
    prices: [
      {
        type: s.dayPass,
        price: 150,
      }
    ],
    facebook: '',
    belayCardRequired: true,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'iClimb 風城',
    slug: 'iClimb',
    tags: ['top roping', 'roped', 'lead', 'bouldering'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Fri:1000-2230,Sat-Sun:0900-2100',
    description: "One of the largest gyms in Taiwan with 16m high walls, autobelay and also a small bouldering section with a lot of ceiling",
    address: '成功2街98號',
    city: 'hsinchu',
    location: {
      latitude: 24.16249,
      longitude: 120.71635
    },
    prices: [
      {
        type: s.dayPass,
        price: 200,
      }
    ],
    facebook: 'https://www.facebook.com/iclimb/',
    belayCardRequired: true,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'TGG 頂瓜瓜',
    slug: 'tgg',
    tags: ['bouldering'],
    rent: ['shoes'],
    openingTimes: 'Mon:1800-2300,Wed:1800-2300,Fri:1800-2300,Sat:1000-2100',
    openingTimesExtra: "Opening Times vary. Check their facebook for details",
    description: "Best climbing gym in Taoyuan. Although, it's also probably the only climbing gym in Taoyuan. Has all angles required and decent training equipment.",
    address: '楊梅區梅高路92號',
    city: 'taoyuan',
    location: {
      latitude: 24.91953,
      longitude: 121.14589
    },
    prices: [
      {
        type: s.dayPass,
        price: 100,
      },
      {
        type: s.studentPass,
        price: 70,
      }
    ],
    facebook: 'https://www.facebook.com/TBG0802?fref=ts',
    belayCardRequired: null,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'Da Vinci',
    slug: 'davinci',
    tags: ['top roping', 'roped', 'lead'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Fri:1300-2130',
    description: "Lots of roped climbing with a long ceiling that let's you traverse to the other side",
    address: '台北市北投區石牌路一段39巷100號',
    city: 'taipei',
    location: {
      latitude: 25.11647,
      longitude: 121.50976
    },
    prices: [
      {
        type: s.dayPass,
        price: 150,
      }
    ],
    facebook: 'https://www.facebook.com/davinci.climbing/',
    belayCardRequired: true,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'Wanhua',
    slug: 'wanhua',
    tags: ['top roping', 'roped', 'lead'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Tue-Fri:1800-2200,Sat-Sun:1300-1800',
    description: "8m climbing. Not a large wall and not a lot of variation in holds",
    address: '108 臺北市萬華區西寧南路6之1號',
    city: 'taipei',
    location: {
      latitude: 25.04741,
      longitude: 121.50675
    },
    prices: [
      {
        type: s.dayPass,
        price: 170,
      }
    ],
    facebook: 'https://www.facebook.com/ecopower.wanhua/',
    belayCardRequired: true,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'B-Plus',
    slug: 'bplus',
    tags: ['bouldering'],
    rent: ['shoes'],
    openingTimes: 'Tue-Fri:1800-2300,Sat:1300-2100,Sun:1300-1900',
    description: "One of the largest bouldering gyms in Taiwan. Well maintained with plenty of training equipment. Has a pegboard, campus rungs and upstairs lounge area.",
    address: '台中市西屯區環中路二段982-1號',
    city: 'taichung',
    location: {
      latitude: 24.18275,
      longitude: 120.63615
    },
    prices: [
      {
        type: s.dayPass,
        price: 200,
      },
      {
        type: s.studentPass,
        price: 160,
      },
      {
        type: s.ticketPack20,
        price: 3200
      }
    ],
    facebook: 'https://www.facebook.com/bplusbouldering',
    belayCardRequired: null,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'Wenshan 文山',
    slug: 'wenshan',
    tags: ['top roping', 'roped', 'lead'],
    rent: ['shoes', 'harness'],
    openingTimes: 'Mon-Sun:0600-2200',
    description: "Roped climbing with 3D panels. Lack of holds and not a place that the enthusiast climber frequents",
    address: '台北市興隆路3段222號',
    city: 'taipei',
    location: {
      latitude: 24.99702,
      longitude: 121.55967
    },
    prices: [
      {
        type: s.dayPass,
        price: 150,
      },
      {
        type: s.studentPass,
        price: 80
      }
    ],
    facebook: '',
    belayCardRequired: true,
    credits: "Image credit to Taiwanrocks.net"
  },
  {
    name: 'YOY 歪仔歪',
    slug: 'yoy',
    tags: ['bouldering'],
    rent: ['shoes'],
    openingTimes: 'Mon-Fri:1800-2130,Sat:0900-2130',
    openingTimesExtra: 'At the weekend the gym closes between 12:00-13:00 and 17:00-18:00',
    description: "One of most relaxing bouldering gyms in Taiwan. It's located in the middle of a paddy field. The gym is covered by a roof, but you feel like you're climbing outside. Plenty of angles to work with here and just a nice place to visit",
    address: '宜蘭縣三星鄉大洲上將路二段290號',
    city: 'yilan',
    location: {
      latitude: 24.69518,
      longitude: 121.73180
    },
    prices: [
      {
        type: s.dayPass,
        price: 100,
      }
    ],
    facebook: 'https://www.facebook.com/YOY-%E6%AD%AA%E4%BB%94%E6%AD%AA%E6%94%80%E5%B2%A9%E9%A4%A8-229618914925/?fref=ts',
    belayCardRequired: null,
    credits: "Image credit to Taiwanrocks.net"
  },
];

const citiesFixtures = [
  {
    id: 'hualien',
    name: 'Hua Lien'
  },
  {
    id: 'taipei',
    name: 'Taipei'
  },
  {
    id: 'taichung',
    name: 'Taichung'
  },
  {
    id: 'kaohsiuong',
    name: 'Kaohsiong'
  }, {
    id: 'yilan',
    name: 'Yilan'
  },
  {
    id: 'taoyuan',
    name: 'Taoyuan'
  },
  {
    id: 'hsinchu',
    name: 'Hsinchu'
  }
];

const gyms = Immutable.fromJS(gymsFixtures);
const cities = Immutable.fromJS(citiesFixtures);

export { gyms, cities };
