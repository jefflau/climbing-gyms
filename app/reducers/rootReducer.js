import { combineReducers } from 'redux';
import routes from './routesReducer';
import gyms from './gymsReducer';
import gymTypeFilter from './gymTypeFilterReducer';
import locationFilter from './locationFilterReducer';
import navPopup from './navPopupReducer';

const rootReducer = combineReducers({
  routes,
  gyms,
  gymTypeFilter,
  locationFilter,
  navPopup
})

export default rootReducer;
