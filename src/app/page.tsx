// App.jsx or index.jsx
import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import OurStory from '../components/OurStory';
import SuccessStories from '../components/SuccessStories';
import DoSomethingGood from '../components/DoSomethingGood';
import SpecialThanks from '../components/SpecialThanks';
import Footer from '../components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Mission />
      <SuccessStories />
      <DoSomethingGood />
      <SpecialThanks />
      <Footer />
      {/* <OurStory /> */}
      {/* Other sections or components */}
    </div>
  );
}

export default App;