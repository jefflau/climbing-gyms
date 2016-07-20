import { gyms } from '../fixtures';

const reducer = (state = gyms, action = {}) => {
  switch(action.type){
    case 'SHOW_BOULDERING':
      return gyms.filter(gym => gym.get('tags').includes('bouldering'))
    case 'SHOW_ROPED':
      return gyms.filter(gym => gym.get('tags').includes('roped'))
    case 'SHOW_ALL':
      return gyms;
    default:
      return state;
  }
};

export default reducer;
