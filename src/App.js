import React from 'react';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';
import WriteForm from './components/form/WriteForm';
import Quotes from './quotes/Quotes';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider, Outlet

} from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Topbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/quotes",
      element: <Quotes/>,
    },
    {
      path:"/write",
      element: <WriteForm/>,
    }
    ],
  },
]);


const App = () => {
  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App;