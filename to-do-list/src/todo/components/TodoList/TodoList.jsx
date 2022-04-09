import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../ui/components/Card/Card';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.styles.scss';

function TodoList({ todos, onDeleteTodo }) {
  return (
    todos.length !== 0 && (
      <Card>
        <ul className="list-items">
          {todos.map((todo) => (
            <TodoListItem key={todo.id} id={todo.id} text={todo.text} onDelete={onDeleteTodo} />
          ))}
        </ul>
      </Card>
    )
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
