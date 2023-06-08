import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
import UserHome from './components/pages/UserHome';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './components/pages/SingleBook';
import Home from './components/pages/Home';
import AdminCategories from './components/pages/admin/AdminCategories';
import AllCategories from './components/pages/AllCategories';
import SingleCategory from './components/pages/SingleCategory';
import AdminLogin from './components/pages/admin/AdminLogin';
import NotFoundPage from './components/pages/NotFoundPage';
import CategoryForm from './components/pages/admin/CategoryForm';
import AdminBooks from './components/pages/admin/AdminBooks';
import BookForm from './components/pages/admin/BookForm';
import AdminAuthors from './components/pages/admin/AdminAuthors';
import AuthorForm from './components/pages/admin/AuthorForm';
import AllBooks from './components/pages/AllBooks';
import AllAuthors from './components/pages/AllAuthors';
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  // useEffect(() => {
  //   // Check if user is logged in from localStorage token
  //   const token = localStorage.getItem('adminToken');
  //   setIsAdminLoggedIn(!!token);
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Topbar />}{' '}
        {/* Render Topbar only if user is logged in */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/admin" element={<AdminCategories />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/categories/:id" element={<SingleCategory />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/books" element={<AllBooks />}></Route>
          <Route path="/authors" element={<AllAuthors />}></Route>
          <Route path="/admin/books" Component={<AdminBooks />}></Route>
          <Route path="/admin/books/:id/edit" Component={<BookForm />}></Route>
          <Route path="/admin/authors" Component={<AdminAuthors />}></Route>
          <Route
            path="/admin/authors/:id/edit"
            Component={<AuthorForm />}
          ></Route>
          <Route path="/admin/categories" Component={AdminCategories}></Route>
          <Route
            path="/admin/categories/:id/edit"
            Component={CategoryForm}
          ></Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
