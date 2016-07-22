import { combineReducers } from 'redux';
import routes from './routesReducer';
import gyms from './gymsReducer';
import gymTypeFilter from './gymTypeFilterReducer';
import locationFilter from './locationFilterReducer';

const rootReducer = combineReducers({
  routes,
  gyms,
  gymTypeFilter,
  locationFilter
})

export default rootReducer;
