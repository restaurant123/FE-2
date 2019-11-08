import React from 'react';
import {Link} from 'react-router-dom';
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
  Media,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText } from 'reactstrap';

import {logout, inLoginPage} from '../actions/loginAction';


class NavBar extends React.Component {


    // this.toggle = this.toggle.bind(this);
    state = {
      isOpen: false,
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
                            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="delivery" />
                      </InputGroup>
                  </DropdownItem>
                  <DropdownItem>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
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

              
              {!this.props.inLoginPage && (
                <NavItem>
                <NavLink className='link' tag={Link} to='../restaurants'><span>MyPassport</span></NavLink>
                </NavItem>
              )}
              

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
})

export default connect(mapPropstoState, {logout})(NavBar)