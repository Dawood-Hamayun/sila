// App.jsx or index.jsx
import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import OurStory from '../components/OurStory';
import SuccessStories from '../components/SuccessStories';

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Mission />
      <SuccessStories />
      {/* <OurStory /> */}
      {/* Other sections or components */}
    </div>
  );
}

export default App;