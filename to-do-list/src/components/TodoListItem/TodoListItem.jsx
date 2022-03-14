import React from 'react';
import './TodoListItem.styles.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo } from '../../redux/todos/todos.slice';

function TodoListItem({ id, text }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="item">
      <option onClick={deleteHandler}>{text}</option>
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoListItem;
