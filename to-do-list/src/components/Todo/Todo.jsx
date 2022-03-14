import React, { useRef } from 'react';
import './Todo.styles.scss';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { addTodo, getTodos } from '../../redux/todos/todos.slice';

function Todo() {
  const dispatch = useDispatch();
  const todoInputRef = useRef();

  const addTodosHandler = () => {
    const enteredTodo = todoInputRef.current.value;

    if (enteredTodo.trim() === '') {
      return;
    }

    const newId = Math.random().toString();
    const enteredData = {
      id: newId,
      text: enteredTodo,
    };

    dispatch(addTodo(enteredData));
    todoInputRef.current.value = '';
  };

  const addAsyncTodoHandler = () => {
    dispatch(getTodos());
  };

  return (
    <Card>
      <div className="form">
        <label>Todo</label>
        <input type="text" maxLength="20" className="input" ref={todoInputRef} />
        <Button onClick={addTodosHandler}>Add Todo</Button>
        <Button onClick={addAsyncTodoHandler}>Get Todo</Button>
      </div>
    </Card>
  );
}

export default Todo;
