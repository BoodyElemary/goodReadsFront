import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
import UserHome from './components/pages/UserHome';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './components/pages/SingleBook';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={UserHome}></Route>
          <Route path="/book" Component={SingleBook}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
