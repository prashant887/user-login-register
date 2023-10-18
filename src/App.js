import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
/** import all compoents */
import Username from './components/Username';
import Register from './components/Register';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Login from "./components/Login";
import Mtd from "./components/Mtd";
import PageNotFound from './components/PageNotFound';


/** Route Resources */
const router=createBrowserRouter([
    {
        path:'/',
        element:<Login></Login>
    },
    {
        path:'/username',
        element:<Username></Username>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
    ,
    {
        path:'/password',
        element:<Password></Password>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/recovery',
        element:<Recovery></Recovery>
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    },
    {
        path:'/reset',
        element:<Reset></Reset>
    },
    {
        path:'/mtd',
        element:<Mtd></Mtd>
    },
    {
        path:"*",
        element:<Username></Username>
    }
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}