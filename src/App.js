import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Pets from './components/Pets';
import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

function App ()
{
  return (
    <>
      <Router>
        <NavBar />
        <div className = 'container'>
          <Routes>
            <Route path = '/' exact element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/pets' element = {<Pets />} />
            <Route path = '/contactus' element = {<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;