import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos = 'fetchTodos',
  deleteTodo = 'deleteTodo'
}

export type Action = FetchTodosAction | DeleteTodoAction;

// This way, in the reducer we will import Action
// instead of import FetchTodosAction, DeleteTodosAction
// with (state: Todo[] = [], action: Action )