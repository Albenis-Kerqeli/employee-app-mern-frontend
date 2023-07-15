import { Suspense , lazy ,useContext} from 'react';
import {StoreContext} from './contexts/Store';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import {BrowserRouter as Router} from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const App = () => {
  return (
    <>
    <Router>
    
    <Navbar/>
    <Suspense fallback={<p>Loading..</p>}>

    <Routes>
 <Route exact path="/" element={<ProtectedRoute>
  <Home/>
 </ProtectedRoute>} />
 <Route  path="/login" element={<Login/>} />
  <Route  path="/register"  element={<Register/>} />
</Routes>
  </Suspense>

</Router>
  </>


  );
}

export default App;
