// src/App.jsx
import React from 'react';

import './App.css';
import Homepage from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
 <Header/>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;