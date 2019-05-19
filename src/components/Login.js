import React from 'react'
import { Button, Form, Input, Label, Container, FormGroup, Col } from 'reactstrap';

class Login extends React.Component {

  state = {
    signUp: {
      name: '',
      email: '',
      password: '',
      confirmPass: ''
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

  }

  handleSignInChanges = (event) => {
    this.setState({ ...this.state, signIn: { ...this.state.signIn, [event.target.name]: event.target.value } })
  }

  handleSignInSubmit = (event) => {
    event.preventDefault();
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
                <Label>confirm Password</Label>
                <Input type="password" name="confirnPass" value={this.state.signUp.confirmPass} onChange={this.handleSignUpChanges} />
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

export default Login