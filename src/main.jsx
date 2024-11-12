import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import App from './App.jsx'
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Todos from './components/todos/Todos.jsx'
import { SnackbarProvider,useSnackbar } from 'notistack'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='todos' element={<Todos/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
    <RouterProvider router={router}/>
    </SnackbarProvider>
  </StrictMode>,
)
