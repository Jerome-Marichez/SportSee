import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const path = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />
  },
]);


const root = document.getElementById('root') as HTMLBodyElement;


ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={path} />
  </React.StrictMode>
);