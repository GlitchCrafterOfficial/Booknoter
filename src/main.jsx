import { createRoot } from 'react-dom/client'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/home/Home';
import Nav from './components/general/Nav';
import BookAdd from './components/add_book/BookAdd';
import List from './components/notes/list/List';
import NewNote from './components/notes/add/NewNote';
import ViewNote from './components/notes/view/ViewNote';
import EditNote from './components/notes/edit/EditNote';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new_book",
    element: <BookAdd />
  },
  {
    path: '/notes/:id',
    element: <List />
  },
  {
    path: '/notes/new/:id',
    element: <NewNote />
  },
  {
    path: '/note/view/:id',
    element: <ViewNote />
  },
  {
    path: '/notes/edit/:id',
    element: <EditNote />
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);