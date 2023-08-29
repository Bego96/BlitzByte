import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import './App.css';
import Navigation from './components/navigation/navigation';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import HomePage from './components/homepage/HomePage';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import Discounts from './components/discounts/Discounts';
import AboutUs from './components/aboutus/AboutUs';

function App() {
  const [showAside, setShowAside] = useState(false);

  function toggleAside() {
    setShowAside(prevShowAside => !prevShowAside);
  }

  return (
    <BrowserRouter>
      <div className="relative">
        <Sidebar showAside={showAside} setAside={toggleAside} />
        <div
          className={`w-[70%] transition-all ease duration-700 tablet:w-[100%] tablet:z-10 ${
            showAside ? 'ml-[30%] tablet:ml-0' : 'ml-[15%] tablet:ml-0'
          }`}
        >
          <Header setAside={toggleAside} showAside={showAside} />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;