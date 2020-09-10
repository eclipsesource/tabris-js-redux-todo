import {createStore} from 'redux';
import {contentView} from 'tabris';
import {injector, register, StateProvider, DefaultRootState} from 'tabris-decorators';
import {reduxDevTools} from './redux-dev';
import {reducers} from './redux-reducers';
import {VisibilityFilters} from './redux-types';
import {TodoListView} from './TodoListView';

injector.jsxProcessor.unsafeBindings = 'error';

const initState: DefaultRootState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Hello'
    },
    {
      id: 1,
      completed: true,
      text: 'World'
    }
  ],
  visibilityFilter: VisibilityFilters.SHOW_ALL
};

register(StateProvider, createStore(reducers, initState, reduxDevTools));

contentView.append(
  <TodoListView stretch/>
);
