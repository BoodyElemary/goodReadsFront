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
import NotFoundPage from './components/pages/NotFoundPage';
import Protected from './components/Protected';
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
          <Route
            path="/home"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <UserHome />
              </Protected>
            }
          />
          <Route
            path="/admin"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <AdminHome />
              </Protected>
            }
          />
          <Route
            path="/categories"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <AllCategories />
              </Protected>
            }
          />
          <Route
            path="/categories/:id"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <SingleCategory />
              </Protected>
            }
          />
          <Route
            path="/books/:id"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <SingleBook />
              </Protected>
            }
          />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
