import {memo, Suspense} from 'react';
import Hero from '../components/Hero';
const Home = memo(() => {
  return (
      <Suspense fallback="Loading">
<Hero/>
</Suspense>
  );
});

export default Home;
