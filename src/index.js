// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";

//---------------------------

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

//-----------------------------

const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children :[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
       {
        path:'/about',
        element:<About/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantDetails/>
      },
    ] ,
    errorElement: <Error/>
  },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
