const reducer = (state = 'SHOW_ALL', action = {}) => {
  let newState;
  switch(action.type){
    case 'SHOW_BOULDERING':
      return action.type;
    case 'SHOW_ROPED':
      return action.type;
    case 'SHOW_ALL':
      return action.type;
    default:
      return state;
  }
};

export default reducer;
