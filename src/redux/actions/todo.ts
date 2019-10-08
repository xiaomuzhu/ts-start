import { ActionTodoConstants } from '../constants/todo'
import { Todo } from '../models/Todo'

let id = 0

const addTodo = (name: string) => ({
  payload: {
    todo: {
      done: false,
      id: id++,
      name,
    },
  },
  type: ActionTodoConstants.ADD_TODO,
})

const toggleTodo = (id: number) => ({
  payload: id,
  type: ActionTodoConstants.ADD_TODO,
})

export interface AddTodoAction {
  type: ActionTodoConstants.ADD_TODO
  payload: { todo: Todo }
}
export interface ToggleTodoAction {
  type: ActionTodoConstants.TOGGLE_TODO
  payload: { id: number }
}

export type Action = AddTodoAction | ToggleTodoAction
