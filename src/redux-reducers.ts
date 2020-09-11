import {combineReducers} from 'redux';
import {DefaultRootState, AnyAction} from 'tabris-decorators';
import {VisibilityFilters} from './redux-types';

export const reducers = combineReducers<DefaultRootState, AnyAction>({

  todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        );
      default:
        return state;
    }
  },

  visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }
  }

});

