import { ADD_TODO } from "./actionsTypes";
import { AddTodoActionType } from "./actions";

type initilState = Array<string>

export function todoReduser(state: initilState = [], action: AddTodoActionType) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
