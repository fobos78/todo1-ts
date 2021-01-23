import { ADD_TODO } from "./actionsTypes";

export type AddTodoActionType = {
  type: typeof ADD_TODO;
  payload: string;
};

export function addTodo(data: string): AddTodoActionType {
  return {
    type: ADD_TODO,
    payload: data,
  };
}
