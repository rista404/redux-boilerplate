import { combineReducers } from 'redux';
import helloWorld from './helloWorld';
import { routeReducer as routing} from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  helloWorld
});

export default rootReducer;
