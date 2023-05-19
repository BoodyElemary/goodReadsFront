import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Topbar from './components/layout/Topbar';
import UserHome from './components/pages/UserHome';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './components/pages/SingleBook';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { }
        <Topbar/>
        <Header/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={UserHome}></Route>
          <Route path="/book" Component={SingleBook}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
