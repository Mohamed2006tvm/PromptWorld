import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import Navbar from './Navbar';

const Routing = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/navbar' element={<Navbar/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing