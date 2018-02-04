import { combineReducers } from 'redux';
import MarketListReducer from './marketListReducer';

const rootReducer = combineReducers({
  marketList: MarketListReducer,
});

export default rootReducer;
