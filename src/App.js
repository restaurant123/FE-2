// import reactGA from 'react-ga';
import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Login from './components/Login'
import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';
import NavBar from './components/NavBar'
import { withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


import {getRestaurantsAction} from './actions/restaurantsAction';
import UpdateForm from './components/UpdateForm';

// reactGA.initialize('UA-144225007-1', {
//   debug: true,
// });

class App extends React.Component {

  componentDidMount() {
    this.props.getRestaurantsAction();
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
  

        <Route exact path='/restaurants' component={Restaurants} />
        <PrivateRoute exact path='/restaurants/restaurant' component={Restaurant} />
        <PrivateRoute exact path='/restaurants/restaurant/updateForm' component={UpdateForm} />
        <Route path='/login' component={Login}/>
        
        <Route exact path="/" render={() => (
            <Redirect to="/restaurants" />
            )}
         />

        {/* <Route exact path="/" render={() => (
          this.props.loggedIn? (
            <Redirect to="/restaurants" />
          ) : (
            <Redirect to="/login" />
            )
        )} /> */}


  
        
      </div>
    );
  }
  
}

const mapPropstoState = (state) => ({
    loggedIn: state.login.loggedIn
  }
)


export default withRouter(connect(mapPropstoState, {getRestaurantsAction})(App));
