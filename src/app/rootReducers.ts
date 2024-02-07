import { combineReducers } from 'redux';
import reduxTimerReducer from '../components/redux-timer/reduxTimerSlice';
import weatherReducer from '../components/weather/weatherSlice';

export const rootReducer = combineReducers({
  reduxTimer: reduxTimerReducer,
  weather: weatherReducer,
});
