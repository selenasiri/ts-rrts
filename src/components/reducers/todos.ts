import { Todo, FetchTodosAction, ActionTypes } from '../../actions/index';

export const todosReducer = (
  state: Todo[] = [], 
  action: FetchTodosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default: 
      return state;
  }
  // return 5; // error message - because we have <StoreState> in reducers > index.ts 
};