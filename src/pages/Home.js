import React from 'react';
import '../styles/App.css';
const Hero = React.lazy(() => import('../components/Hero'));
const Home = () => {
  return (
      <>
<Hero/>
</>
  );
}

export default Home;
