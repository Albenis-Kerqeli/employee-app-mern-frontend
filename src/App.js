import React, { Suspense , } from 'react';
import {StoreContext} from './contexts/Store';
import { Route } from 'react-router-dom';

import './styles/App.css';
import {BrowserRouter as Router , Switch} from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home.js'));
const Login = React.lazy(() => import('./pages/Login.js'));
const Register = React.lazy(() => import('./pages/Register.js'));
const Navbar = React.lazy(() => import('./components/Navbar.js'));

const App = () => {
  const {isLoggedIn} = React.useContext(StoreContext);
  return (
    <Suspense fallback={'Loading...'}>
    <Router>
    <Navbar/>

    <Switch>
 {isLoggedIn ? <Route   path="/" component={Home} /> : <Route exact path="/" component={Login} />}
 {!isLoggedIn ? <Route exact path="/login" component={Login} /> : <Route  path="/" component={Home} />}
 {!isLoggedIn ? <Route exact path="/register"  component={Register} /> : <Route  path="/" component={Home} />}
</Switch>
</Router>

</Suspense>



  );
}

export default App;
