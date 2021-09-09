import React from 'react';
import '../styles/App.css';
import Hero from '../components/Hero';
const Home = React.memo(() => {
  return (
      <>
<Hero/>
</>
  );
});

export default Home;
