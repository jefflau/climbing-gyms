import { gyms } from '../fixtures';

const reducer = (state = gyms, action = {}) => {
  let newState;
  switch(action.type){
    case 'SHOW_BOULDERING':
      newState = gyms.filter((gym) => {
        let tags = gym.tags.filter(tag => tag === 'bouldering')
        return tags.length > 0;
      })
      return newState;
    case 'SHOW_ROPED':
      newState = gyms.filter((gym) => {
        let tags = gym.tags.filter(tag => tag === 'roped')
        return tags.length > 0;
      })
      return newState;
    case 'SHOW_ALL':
      return gyms;
    default:
      return state;
  }
};

export default reducer;
