import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/HeroSection';
import Search from './components/searchSection/Search';
import Partners from './components/partners/Partners';
import ReactForms from './components/reactForms/ReactForms';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Search />
      <Partners />
      <ReactForms />
    </div>
  );
}

export default App;
