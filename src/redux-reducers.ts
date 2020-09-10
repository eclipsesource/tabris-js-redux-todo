import {combineReducers} from 'redux';
import {DefaultRootState, AnyAction} from 'tabris-decorators';

export const reducers = combineReducers<DefaultRootState, AnyAction>({
  myString(state, action) {
    if (action.type === 'TOGGLE_STRING') {
      return action.checked ? 'Another Hello World' : 'Hello World';
    }
    return state || 'Hello World';
  }
});
