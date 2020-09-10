export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

export type TodoItem = {
  id: number,
  text: string,
  completed: boolean
};

declare module 'tabris-decorators' {

  export interface DefaultRootState {
    todos: TodoItem[];
    visibilityFilter: VisibilityFilters;
  }

  export interface DefaultActions {

    addTodo: {
      type: 'ADD_TODO',
      id: number,
      text: string
    };

    setVisibilityFilter: {
      type: 'SET_VISIBILITY_FILTER',
      filter: VisibilityFilters
    };

    toggleTodo: {
      type: 'TOGGLE_TODO',
      id: number
    };

  }

}
