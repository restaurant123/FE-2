import React from 'react'
import { Button, Form, Input, Label, Container, FormGroup, Col } from 'reactstrap';
import {loginAction} from '../actions/loginAction'
import {registeringAction} from '../actions/registeringAction'
import { connect } from 'react-redux';

class Login extends React.Component {

  state = {
    signUp: {
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    },
    signIn: {
      email: '',
      password: ''
    }
  }

  handleSignUpChanges = (event) => {
    this.setState({ ...this.state, signUp: { ...this.state.signUp, [event.target.name]: event.target.value } })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    this.props.registeringAction(this.state.signUp);

  }

  handleSignInChanges = (event) => {
    this.setState({ ...this.state, signIn: { ...this.state.signIn, [event.target.name]: event.target.value } })
  }

  handleSignInSubmit = (event) => {
    event.preventDefault();
    console.log(this.loginAction);
    this.props.loginAction(this.state.signIn)
  }

  render() {
    return (
      <div className='login'>
        <Container className="signup">
          <h2>Sign Up</h2>
          <Form >
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
                <Input type="number" name="zipcode" value={this.state.signUp.zipcode} onChange={this.handleSignUpChanges} />
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
      </div>
    )
  }

}


export default connect(null, {loginAction, registeringAction})(Login)