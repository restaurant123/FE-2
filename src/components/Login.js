// import reactGA from 'react-ga';
import React from 'react';
import { Button, Form, Input, Label, Container, FormGroup, Col } from 'reactstrap';
import {loginAction, inLoginPageAction, outLoginPageAction} from '../actions/loginAction';
import {registeringAction} from '../actions/registeringAction';
import { connect } from 'react-redux';

class Login extends React.Component {

  
  componentDidMount() {
    // reactGA.pageview('/login');
    this.props.inLoginPageAction();
  }

  componentWillUnmount() {
    this.props.outLoginPageAction()
  }

  state = {
    signUp: {
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    },
    signIn: {
      email: '',
      password: ''
    },
    signInGuest: {
      email:'john_doe@gmail.com',
      password:'password'
    }
  }

  handleSignUpChanges = (event) => {
    this.setState({ ...this.state, signUp: { ...this.state.signUp, [event.target.name]: event.target.value } })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    this.props.registeringAction(this.state.signUp)
      .then(() => {this.props.loggedIn? 
        this.props.history.push('/restaurants') : this.props.history.push('/login')
      })
  }

  handleSignInChanges = (event) => {
    this.setState({ ...this.state, 
        signIn: { ...this.state.signIn, 
        [event.target.name]: event.target.value } })
  }

  handleSignInSubmit = (event) => {
    event.preventDefault();
    this.props.loginAction(this.state.signIn)
      .then(() => {this.props.loggedIn? 
        this.props.history.push('/restaurants') : this.props.history.push('/login')
      })
  }

  handleGuestLogin = (event) => {
    event.preventDefault();
    this.props.loginAction(this.state.signInGuest)
      .then(()=> {this.props.loggedIn?
          this.props.history.push('/restaurants'): this.props.history.push('/login')
      })
  }

  render() {
    return (
      <div className='login'>
        <Container className="signup">
          <h2>Sign Up</h2>
          <Form>
            <FormGroup>
              <Col>
                <Label>Name</Label>
                <Input type="text" name="name" value={this.state.signUp.name} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col>
                <Label>Email</Label>
                <Input type='text' name='email' value={this.state.signUp.email} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col>
                <Label>password</Label>
                <Input type="password" name="password" value={this.state.signUp.password} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Address</Label>
                <Input type="text" name="address" value={this.state.signUp.address} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>city</Label>
                <Input type="text" name="city" value={this.state.signUp.city} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>state</Label>
                <Input type="text" name="state" value={this.state.signUp.state} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>zipcode</Label>
                <Input type="number" name="zipCode" value={this.state.signUp.zipCode} onChange={this.handleSignUpChanges} />
              </Col>
            </FormGroup>


            <Button type='submit' onClick={this.handleSignUpSubmit}>Sign Up</Button>
          </Form>
        </Container>

        <Container className="signin">
          <h2>Sign In</h2>
          <Form>
            <FormGroup>
              <Col>
                <Label>Email</Label>
                <Input type="email" name="email" value={this.state.signIn.name} onChange={this.handleSignInChanges} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Password</Label>
                <Input type="password" name="password" value={this.state.signIn.password} onChange={this.handleSignInChanges} />
              </Col>
            </FormGroup>
            <Button type='submit' onClick={this.handleSignInSubmit}>Sign In</Button>
          </Form>
        </Container>

        <Button className='guest' type='submit' onClick={this.handleGuestLogin}>guest login</Button>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  id: state.login.loginId,
  loggedIn: state.login.loggedIn
});

export default connect(mapStateToProps, {loginAction, inLoginPageAction, outLoginPageAction, registeringAction})(Login)