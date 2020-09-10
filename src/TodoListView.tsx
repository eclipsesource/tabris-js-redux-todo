import {TodoItem, VisibilityFilters} from './redux-types';
import {toggleTodo} from './redux-actions';
import {ListView, connect} from 'tabris-decorators';
import {Attributes, TextView} from 'tabris';
import {Cell} from 'tabris-decorators';
import {Binding} from 'tabris-decorators';
import {to} from 'tabris-decorators';

export const TodoListView = connect<ListView<TodoItem>>(

  state => ({
    items: getVisibleTodos(state.todos, state.visibilityFilter)
  }),

  dispatch => ({
    onSelect: ({item}) => dispatch(toggleTodo(item.id))
  })

)((attributes: Attributes<ListView<TodoItem>>) =>

  <ListView {...attributes}>
    <Cell selectable>
      <TextView markupEnabled bind-text={toMarkup('item')}></TextView>
    </Cell>
  </ListView>

);

function toMarkup(path: string): Binding {
  return to(path, (item: TodoItem) => !item ? '' : item.completed
    ? <$>• <del>{item.text}</del></$>
    : <$>• <ins>{item.text}</ins></$>
  );
}

function getVisibleTodos(todos: TodoItem[], filter: VisibilityFilters): TodoItem[] {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}
