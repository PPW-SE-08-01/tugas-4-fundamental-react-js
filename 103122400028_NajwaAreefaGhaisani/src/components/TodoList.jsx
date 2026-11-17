import { useState } from 'react';

function TodoList() {
  const [todos] = useState([
    { id: 1, text: 'Pelajari dasar JSX & Komponen', completed: true },
    { id: 2, text: 'Pahami Props dan State', completed: true },
    { id: 3, text: 'Implementasi useEffect & Fetch API', completed: false },
  ]);

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>2. List & Conditional Rendering (Todo List)</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '6px' }}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            {' '}
            {todo.completed ? (
              <span style={{ color: 'green', fontSize: '0.85rem' }}>(Selesai)</span>
            ) : (
              <span style={{ color: 'orange', fontSize: '0.85rem' }}>(Belum)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;