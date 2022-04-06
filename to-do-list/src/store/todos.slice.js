import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchTodos from '../todo/utils/fetchTodos';
import todoStatus from './todos.status-types';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Walk the dog',
    },
    {
      id: 2,
      text: 'Go to groceries',
    },
  ],
};

export const getTodo = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetchTodos();
  return response;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    deleteTodo(state, action) {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
  extraReducers: {
    [getTodo.pending]: (state) => {
      state.status = todoStatus.LOADING;
    },
    [getTodo.fulfilled]: (state, action) => {
      state.status = todoStatus.SUCCESS;
      state.todos.push(action.payload);
    },
    [getTodo.rejected]: (state) => {
      state.status = todoStatus.FAILED;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export const selectStatus = (state) => state.todos.status;

export default todoSlice.reducer;
