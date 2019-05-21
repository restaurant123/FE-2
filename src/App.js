import React from 'react';
import {Route, Link} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Login from './components/Login'
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test
      </header>

      <Link to='/login'>Login</Link>

      <PrivateRoute exact path='/restaurants' component={Restaurants} />
      <Route path='/login' component={Login}/>

      
    </div>
  );
}

export default App;
