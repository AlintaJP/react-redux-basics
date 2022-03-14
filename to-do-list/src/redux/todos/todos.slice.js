import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchTodos from '../../utils/fetchTodos';

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

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
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
    [getTodos.pending]: (state) => {
      state.status = 'loading';
    },
    [getTodos.fulfilled]: (state, action) => {
      state.status = 'success';
      state.todos.push(action.payload);
    },
    [getTodos.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
