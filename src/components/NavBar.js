import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Media,} from 'reactstrap';

import {logout} from '../actions/loginAction';
import {updateTakeoutAction, updateDeliveryAction} from '../actions/restaurantsAction'


class NavBar extends React.Component {


    state = {
      isOpen: false,
      takeout: false,
      delivery: false,
    };
  

  // componentDidMount() {
  //   this.navItemsVisibility();
  // }

  // componentDidUpdate() {
  //   this.navItemsVisibility();
  // }

  // navItemsVisibility = () => {
  //   if (this.props.loggedIn) {
  //     // document.querySelector(".login").classList.add("hidden");
  //     // document.querySelector(".logout").classList.remove("hidden");
  //     //document.querySelector(".filter").classList.remove("hidden");
  //     // document.querySelector(".dropdown-toggle").classList.remove("hidden");

  //   }
  //   else {
  //     // document.querySelector(".login").classList.remove("hidden");
  //     // document.querySelector(".logout").classList.add("hidden");
  //     //document.querySelector(".filter").classList.add("hidden");
  //     // document.querySelector(".dropdown-toggle").classList.add("hidden");
  //   }
  // }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick = (event) => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/login')
  }

  handleFilterClick = (event) => {
    // event.preventDefault();
    // console.log('before: ', this.state)
    // this.setState({[event.target.name]: !this.state[event.target.name]});
    // setTimeout(()=> console.log('after: ', this.state), 1000)
    if(event.target.name === 'delivery') {
      this.props.updateDeliveryAction();
    }
    else {
      this.props.updateTakeoutAction();
    }

  }


  render() {
    return (
      <div>
        <Navbar className= 'navbar' light expand="md">

          <Media object src='favicon.ico' alt="Logo" />

          <NavbarBrand href="/"><h1>Restaurant Passport</h1></NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink className='link' tag={Link} to='../restaurants'><span>Restaurants</span></NavLink>
              </NavItem>

              {!this.props.inLoginPage && (
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                    <span>Filter</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <InputGroup>
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <Input 
                              addon type="checkbox" aria-label="Checkbox for following text input"
                              name = 'delivery'
                              checked = {this.props.delivery}
                              onChange = {this.handleFilterClick}
                            />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="delivery" />
                      </InputGroup>
                  </DropdownItem>
                  <DropdownItem>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <Input 
                              addon type="checkbox" aria-label="Checkbox for following text input"
                              name = 'takeout'
                              checked = {this.props.takeout}
                              onChange={this.handleFilterClick}

                            />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="takeout" />
                      </InputGroup>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <span className='item'>Reset</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              )}

              
              {/* { !this.props.inLoginPage && (
                <NavItem>
                <NavLink className='link' tag={Link} to='../restaurants'><span>MyPassport</span></NavLink>
                </NavItem>
              )} */}
              

              {
                (!this.props.loggedIn && !this.props.inLoginPage && (
                  <NavItem>
                    <NavLink className='link' tag={Link} to='/login'><span>Login</span></NavLink>
                  </NavItem>
                  )
                )
              }

              {
                (this.props.loggedIn && 
                  <NavItem>
                    <NavLink className='link' tag={Link} to='/login' onClick={this.handleLogoutClick}><span>Logout</span></NavLink>
                  </NavItem>
                )
              }
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapPropstoState = (state) => ({
  loggedIn: state.login.loggedIn,
  inLoginPage: state.login.inLoginPage,
  delivery: state.restaurants.delivery,
  takeout: state.restaurants.takeout
})

export default withRouter(connect(
      mapPropstoState, 
      {logout, updateDeliveryAction, updateTakeoutAction})(NavBar)
    )