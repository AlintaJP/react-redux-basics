import React, { useRef } from 'react';
import './TodoForm.styles.scss';
import PropTypes from 'prop-types';
import Button from '../../../ui/components/Button/Button';
import Card from '../../../ui/components/Card/Card';

function TodoForm({ onAddTodo }) {
  const todoInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTodo = todoInputRef.current.value;

    if (enteredTodo.trim() === '') {
      return;
    }

    const newId = Math.random().toString();
    const enteredData = {
      id: newId,
      text: enteredTodo,
    };

    onAddTodo(enteredData);
    todoInputRef.current.value = '';
  };

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-container">
          <label>Todo</label>
          <input type="text" maxLength="20" className="input" ref={todoInputRef} />
        </div>
        <Button submit>Add Todo</Button>
      </form>
    </Card>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
