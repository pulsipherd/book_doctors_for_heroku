import React, { Component } from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import { handleRegister } from '../actions/auth'
import { connect } from 'react-redux'

class Register extends Component {
  state = { firstname: '', lastname: '', email: '', password: '', passwordConfirmation: '' }
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, passwordConfirmation } = this.state;
    if (password === passwordConfirmation)
      this.props.dispatch(handleRegister(email, password, passwordConfirmation, this.props.history))
    else
      alert('Passwords Do Not Match!')
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstname, lastname, email, password, passwordConfirmation } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              required
              autoFocus
              name='firstname'
              value={firstname}
              placeholder='First Name'
              onChange={this.handleChange}
            />
          <Form.Field>
            <label>Last Name</label>
            <input
              name='lastname'
              value={lastname}
              placeholder='Last Name'
              onChange={this.handleChange}
            />
          <Form.Field>
            <label>Email</label>
            <input
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password (at least 8 characters long)</label>
            <input
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}
export default connect()(Register);