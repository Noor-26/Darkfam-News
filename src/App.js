import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

import Navber from './components/shared/Navber/Navber';
import Home from './components/Home/Home';
import { Routes,Route } from "react-router-dom";
import SearchedPage from './components/Pages/SearchedPage/SearchedPage';

function App() {
  const [newsDate, setnewsDate] = useState("")
  return (
    <div className="App" data-theme="bumblebee">
      <Navber />
   
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/search/:name" element={ <SearchedPage/>  }/>

        </Routes>
    </div>
  );
}

export default App;
