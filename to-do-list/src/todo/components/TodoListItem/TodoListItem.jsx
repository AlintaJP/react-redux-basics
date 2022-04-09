import React from 'react';
import './TodoListItem.styles.scss';
import PropTypes from 'prop-types';
import { ReactComponent as RemoveButton } from '../../assets/close-red.svg';

function TodoListItem({ id, text, onDelete }) {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="item">
      <span>{text}</span>
      <RemoveButton
        type="button"
        onClick={deleteHandler}
        className="remove-button"
        aria-label={`Remove ${text} todo`}
      />
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
