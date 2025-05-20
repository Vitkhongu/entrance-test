import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {store} from './Task 3 React-Redux Application/redux/store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Task1 from './Task 1 String Length Frequency/task1';
import Task2 from './Task 2 Sum of Top Two Integers/task2';
import Task3 from './Task 3 React-Redux Application/task3';
import PostList from './Task 3 React-Redux Application/components/PostList';
import PostForm from './Task 3 React-Redux Application/components/PostForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "task1",
        element: <Task1 />,
      },
      {
        path: "task2",
        element: <Task2 />,
      },
      {
        path: "task3",
        element: <Task3 />,
        children: [
        {
          path: "postlist",
          element: <PostList />,
        },
        {
          path: "postform",
          element: <PostForm />,
        }
      ]
      }
    ]
  }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
