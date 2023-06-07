import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
import UserHome from './components/pages/UserHome';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './components/pages/SingleBook';
import Home from './components/pages/Home';
import AdminHome from './components/pages/admin/AdminHome';
import AllCategories from './components/pages/AllCategories';
import SingleCategory from './components/pages/SingleCategory';
import AdminLogin from './components/pages/admin/AdminLogin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Topbar />}{' '}
        {/* Render Topbar only if user is logged in */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/book" element={<SingleBook />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/categories/:id" element={<SingleCategory />} />
          <Route path="/:id" element={<SingleBook />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
