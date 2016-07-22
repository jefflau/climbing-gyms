import { gyms } from '../fixtures';

const reducer = (state = gyms, action = {}) => {
  switch(action.type){    
    // case 'FILTER_CITY':
    //   return state.filter(gym => gym.get('city') === action.city)
    default:
      return state;
  }
};

export default reducer;
