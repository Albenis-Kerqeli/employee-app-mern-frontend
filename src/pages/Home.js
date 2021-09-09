import {memo} from 'react';
import '../styles/App.css';
import Hero from '../components/Hero';
const Home = memo(() => {
  return (
      <>
<Hero/>
</>
  );
});

export default Home;
