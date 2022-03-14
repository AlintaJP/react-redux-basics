import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card/Card';
import TodoListItem from '../TodoListItem/TodoListItem';
import { selectTodos } from '../../redux/todos/todos.slice';

import './TodoList.styles.scss';

function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    <div>
      {todos.length !== 0 && (
        <Card>
          <ul className="listItems">
            {todos.map((todo) => (
              <TodoListItem key={todo.id} id={todo.id} text={todo.text} />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default TodoList;
