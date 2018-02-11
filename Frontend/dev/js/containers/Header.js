import React, {Component} from 'react';
import {connect} from 'react-redux';
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
      activeItem: 'product',
      redirectUrl: {
        "cart" : "/cart",
        "home" : "/home",
      }
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, {name}) {
    console.log('handleItemClick click');
    let urls = this.state.redirectUrl
    this.setState({activeItem: name, redirectUrl: urls[name]}, ()=> {
      console.log('redirect url=', this.state.redirectUrl);
    })
  }

    render() {
      let {activeItem} = this.state
      console.log('cartItems in header', this.props.cartItems);
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
                content={'Cart ' + this.props.cartItems.length}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Redirect to={this.state.redirectUrl} />
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
