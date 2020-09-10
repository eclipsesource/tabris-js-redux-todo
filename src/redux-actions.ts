import {VisibilityFilters} from './redux-types';
import {AnyAction} from 'tabris-decorators';

let nextTodoId = 0;

export const addTodo = (text: string): AnyAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter: VisibilityFilters): AnyAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id: number): AnyAction => ({
  type: 'TOGGLE_TODO',
  id
});
