import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
import UserHome from './components/pages/UserHome';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './components/pages/SingleBook';
import Home from './components/pages/Home';
import AdminCategories from './components/pages/admin/AdminCategories';
import AllCategories from './components/pages/AllCategories';
import SingleCategory from './components/pages/SingleCategory';
import AdminLogin from './components/pages/admin/AdminLogin';
import CategoryForm from './components/pages/admin/CategoryForm';
import AdminBooks from './components/pages/admin/AdminBooks';
import BookForm from './components/pages/admin/BookForm';
import AdminAuthors from './components/pages/admin/AdminAuthors';
import AuthorForm from './components/pages/admin/AuthorForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {}
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={UserHome}></Route>
          <Route path="/book" Component={SingleBook}></Route>
          <Route path="/categories" Component={AllCategories}></Route>
          <Route path="categories/:id" element={<SingleCategory />} />
          <Route path="/admin/login" Component={AdminLogin}></Route>
          <Route path="/admin" Component={AdminCategories}></Route>
          <Route path="/admin/categories" Component={AdminCategories}></Route>
          <Route path="/admin/categories/:id/edit" Component={CategoryForm}></Route>
          <Route path="/admin/books" Component={AdminBooks}></Route>
          <Route path="/admin/books/:id/edit" Component={BookForm}></Route>
          <Route path="/admin/authors" Component={AdminAuthors}></Route>
          <Route path="/admin/authors/:id/edit" Component={AuthorForm}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
