import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './auth/LoginPage';
import Dashboard from './Dashboard';
import DashboardHome from './DashboardHome';
import Projects from './Projects';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<Projects />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default Routing
