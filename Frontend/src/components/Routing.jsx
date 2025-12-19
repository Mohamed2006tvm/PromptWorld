import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './auth/LoginPage';
import Dashboard from './Dashboard';

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing