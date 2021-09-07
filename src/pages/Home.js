import React from 'react';
import '../styles/App.css';
const Hero = React.lazy(() => import('../components/Hero'));
const Home = React.memo(() => {
  return (
      <>
<Hero/>
</>
  );
});

export default Home;
