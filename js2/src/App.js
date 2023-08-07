import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>TOBIAS LOOFT</h1>
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">HEM</Link>
            </li>
            <li>
              <Link to="/about">OM</Link>
            </li>
            <li>
              <Link to="/contact">KONTAKT</Link>
            </li>
            <li>
              <Link to="/Modal">MODAL</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Modal" element={<Modal />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
