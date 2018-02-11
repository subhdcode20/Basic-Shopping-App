import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router'
import {
  Grid,
  Form,
  Input,
  Select,
  Card,
  Segment,
  Menu,
  Header,
  Button,
  Divider,
  Container
} from 'semantic-ui-react'
import ItemList from 'AppContainers/itemList'
import Headernav from 'AppContainers/Header'

require('../../scss/style.scss');

class Parent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    console.log('render parent');
    return (
      <Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>
            <Headernav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>
            <ItemList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps (state) {
  const { users } = state;
  return {
    users
  }
}
export default connect(mapStateToProps)(Parent);
