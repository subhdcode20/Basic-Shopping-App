import React, {Component} from 'react';
import {connect} from 'react-redux';
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

var classes = {

logintext: {
  paddingTop: 250,
  textAlign: 'center',
  height: "100%",
  width: '100%'
}
}

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

    render() {
      return (
      <Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>

            <Grid container>
              <Grid.Row textAlign="center" verticalAlign="middle">
                <Grid.Column textAlign="center" verticalAlign="middle" width={5}>

                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
        </Grid.Row>
      </Grid>)
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(ItemList);
