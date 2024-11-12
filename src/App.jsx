import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom';

function App() {

  return (
    <>
     {/* <Link to='/register'>Register</Link><br/>
     <Link to='/login'>Login</Link><br/>
     <Link to='/todos'>Todos</Link><br/> */}
    
      <Outlet/>
    </>
  )
}

export default App
