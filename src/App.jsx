import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a href="/task1">Task 1</a></li>
          <li><a href="/task2">Task 2</a></li>
          <li><a href="/task3">Task 3</a></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
