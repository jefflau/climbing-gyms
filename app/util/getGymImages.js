export default function getMainImage(gym){
  switch(gym){
    case 'stone':
      return require('../img/stone/main.jpg')
    case 'redrock':
      return require('../img/redrock/main.jpg')
    case 'civic':
      return require('../img/civic/main.jpg')
    case 'neihu':
      return require('../img/neihu/main.jpg')
    case 'y17':
      return require('../img/y17/main.jpg')
    case 'xinyi':
      return require('../img/xinyi/main.jpg')
  }
}
