const reducer = (state = "", action = {}) => {
  switch(action.type){
    case "OPEN_CITY_SELECT":
      return action.type;
    case "CLOSE_NAV_POPUPS":
      return "";
    default:
      return state;
  }
};

export default reducer;
