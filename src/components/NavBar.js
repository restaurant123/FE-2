import React from 'react';
import {Link} from 'react-router-dom';
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

export default class Example extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token'))
      document.querySelector(".login").classList.add("hidden")
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
              <NavItem>
                <NavLink className='link login' tag={Link} to='/login'><span>Login</span></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                
              <DropdownToggle nav caret>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}