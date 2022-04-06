/* eslint-disable no-promise-executor-return */
export default function fetchTodos() {
  return new Promise((resolve) => setTimeout(() => resolve({ id: 10, text: 'async todo' }), 3000));
}
