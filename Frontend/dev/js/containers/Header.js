import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router'
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
      activeItem: '',
      redirectUrl: {
        "cart" : "/cart",
        "home" : "/",
      }
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, {name}) {
    console.log('handleItemClick click');
    let urls = this.state.redirectUrl
    console.log('new url=', urls[name]);
    this.setState({activeItem: name, redirectUrl: urls[name]}, ()=> {
      console.log('redirect url=', this.state.redirectUrl);
      this.props.history.push(this.state.redirectUrl)
    })
  }

    render() {
      let {activeItem} = this.state
      console.log('cartItems in header', this.props, this.state);
      let cartTotalItems = this.props.cartItems.length

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
                content={'Cart ' + cartTotalItems}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column>
            {this.state.activeItem && <Redirect to={this.state.redirectUrl[activeItem]} />}
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

export default withRouter(connect(mapStateToProps)(Headernav));
