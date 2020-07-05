import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/search/SearchBar';
import Content from './components/content/Content';

import './App.css';

function App() {
  return (
    <div className="backgroundBody">
      <Navbar />
      <Carousel />
      <SearchBar />
      <Content />
      <Footer />      
    </div>
  );
}

export default App;
