import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import App from '../App'
import User from '../pages/Users'
import SingleUser from '../pages/SingleUser'
function Router() {
    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element ={<App/>}>
                <Route path='users' element={<User/>}/>
                <Route path='users/:id' element={<SingleUser/>}/>
                
            </Route>
        )
    )
  return  <RouterProvider router={route}/>
}

export default Router