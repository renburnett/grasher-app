import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  
  state = {
    loggedIn: false,
    currentUser: null
  }

  componentDidMount() {
    //TODO: refactor to pull GRID out of login AND FridgesContainer?
  }

  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '80vh'}}>

          <Form size='large'>
            <Segment>
              <Header as='h1' color='blue' textAlign='left'>
                Grasher
                <Header.Subheader>
                  we don't let your groceries expire on you!
                </Header.Subheader>
              </Header>

              <Form.Input fluid icon='user' iconPosition='left' placeholder='maria@nw_harvest.org' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='password'
                type='password'
              />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
              <Message>
                Never been here before? <Link to="/signup">Sign Up!</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login;