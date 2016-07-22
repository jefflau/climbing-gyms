import { gyms } from '../fixtures';

const reducer = (state = gyms, action = {}) => {
  switch(action.type){    
    default:
      return state;
  }
};

export default reducer;
