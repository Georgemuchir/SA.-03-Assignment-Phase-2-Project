// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Sidebar />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
