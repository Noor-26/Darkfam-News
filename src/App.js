import logo from './logo.svg';
import './App.css';
import React, { useEffect} from 'react'

import Navber from './components/shared/Navber/Navber';
import Home from './components/Home/Home';
import { Routes,Route } from "react-router-dom";
import SearchedPage from './components/Pages/SearchedPage/SearchedPage';
import Category from './components/Pages/Category/Category';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
 
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App" data-theme="lofi">
      <Navber />
   
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/search/:name" element={ <SearchedPage/>  }/>
        <Route path="/category/:categoryName" element={ <Category/>  }/>

        </Routes>
    </div>
  );
}

export default App;
