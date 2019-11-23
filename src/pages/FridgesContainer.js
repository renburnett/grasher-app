import React, { Component } from 'react';
import Fridge from '../components/Fridge';
import { Header, Grid, Card } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class FridgesContainer extends Component {

  displayFridges = () => {
    return this.props.fridges.map((fridge) => {
      return <Fridge fridge={fridge} key={fridge.id} />
    })
  }

  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '100vh'}}>
          <Card.Group centered>
            {this.displayFridges()}
          </Card.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default FridgesContainer;