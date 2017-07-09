import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth-reducer';
import msg from './message-reducer';
import user from './user-reducer';

const rootReducer = combineReducers({
  form,
  auth,
  msg,
  user
});

export default rootReducer;
