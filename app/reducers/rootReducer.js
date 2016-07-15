import { combineReducers } from 'redux';
import routes from './routesReducer';
import gyms from './gymsReducer';
import gymFilter from './gymFilterReducer';

const rootReducer = combineReducers({
  routes,
  gyms,
  gymFilter
})

export default rootReducer;
