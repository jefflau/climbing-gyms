const reducer = (state = "all", action = {}) => {
  switch(action.type){
    case "FILTER_CITY":
      return action.city;
    default:
      return state;
  }
};

export default reducer;
