import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavbarContainer from './Components/NavbarContainer';
import SearchContainer from './Components/SearchContainer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import DealsContainer from './Components/DealsContainer';
import PromotionContainer from './Components/PromotionContainer';
import './App.css';

function Layout() {
  const location = useLocation();
  
  // Only show Navbar and SearchContainer on specific paths
  const showNavbarAndSearch = location.pathname === '/';

  return (
    <div>
      {showNavbarAndSearch && (
        <>
          <NavbarContainer />
          <SearchContainer />
          <DealsContainer />
          <PromotionContainer/>
        </>
      )}
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
