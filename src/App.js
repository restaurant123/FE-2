import React from 'react';
import {Route, Link} from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test
      </header>

      <Link to='/login'>Login</Link>

      <Route exact path='/login' component={Login}/>
      
    </div>
  );
}

export default App;
