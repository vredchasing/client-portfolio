import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ProjectPage from './Components/HomeComponents.jsx/ProjectPage.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App></App>}>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path="/projects/:projectId" element={<ProjectPage/>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
