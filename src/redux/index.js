import { combineReducers } from 'redux';
import { vaccineListReducer } from './VaccineListRedux';

export default combineReducers({
  vaccineList: vaccineListReducer,
});
