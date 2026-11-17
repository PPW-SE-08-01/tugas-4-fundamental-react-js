import Header from './components/Header';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserFetch from './components/UserFetch';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <Header title="React JS Practical Guide" studentName="Najwa Areefa Ghaisani" />
      <Counter />
      <TodoList />
      <UserFetch />
    </div>
  );
}

export default App;