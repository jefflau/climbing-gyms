import { cities } from '../fixtures';

const reducer = (state = cities, action = {}) => {
  switch(action.type){
    default:
      return state;
  }
};

export default reducer;
