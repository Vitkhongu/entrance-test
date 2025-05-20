import '../App.css';
import { Outlet, Link } from 'react-router-dom';

const Task3 = () => {
  return (
    <div className="App">
      <header >
        <h1>Task 3: React-Redux Application</h1>
        <ul>
          <li><Link to="postlist">Get list post</Link></li>
          <li><Link to="postform">Add new post</Link></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Task3;