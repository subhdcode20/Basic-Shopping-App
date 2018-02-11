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

class Headernav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'product'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick() {
console.log('handleItemClick click');
  }

    render() {
      let {activeItem} = this.state
      return (<Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
        <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
          <Menu>
            <Menu.Item
              name='product'
              active={activeItem === 'product'}
              content='Product'
              onClick={this.handleItemClick}
            />
          </Menu>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
            <Menu>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                content='Home'
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='cart'
                active={activeItem === 'cart'}
                content='Cart'
                onClick={this.handleItemClick}
              />
            </Menu>
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

export default connect(mapStateToProps)(Headernav);
