const reducer = (state = "", action = {}) => {
  switch(action.type){
    case "TOGGLE_CITY_SELECT":
      if(state === "TOGGLE_CITY_SELECT"){
        return "";
      }
      return action.type;
    case "CLOSE_NAV_POPUPS":
      return "";
    default:
      return state;
  }
};

export default reducer;
