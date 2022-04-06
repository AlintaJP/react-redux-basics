import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import Button from '../../../ui/components/Button/Button';
import {
  addTodo,
  getTodo,
  deleteTodo,
  selectTodos,
  selectStatus,
} from '../../../store/todos.slice';
import todoStatus from '../../../store/todos.status-types';

import './TodoContainer.styles.scss';

function TodoContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const addTodoHandler = (enteredData) => {
    dispatch(addTodo(enteredData));
  };

  const addAsyncTodoHandler = () => {
    dispatch(getTodo());
  };

  const override = css`
    position: relative;
    left: 48.5%;
  `;

  return (
    <>
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler} />
      {status === todoStatus.LOADING ? (
        <ClipLoader size={50} color="#9c36b5" css={override} />
      ) : (
        <Button onClick={addAsyncTodoHandler} classes="async-todo-button">
          Get Async Todo
        </Button>
      )}
    </>
  );
}

export default TodoContainer;
