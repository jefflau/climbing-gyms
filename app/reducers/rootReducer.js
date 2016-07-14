import { combineReducers } from 'redux';
import routes from './routesReducer';
import gyms from './gymsReducer';

const rootReducer = combineReducers({
  routes,
  gyms
})

export default rootReducer;
