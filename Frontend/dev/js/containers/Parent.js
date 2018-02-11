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
import Moltin from 'AppComponents/Moltin'

require('../../scss/style.scss');

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      cartItems: []
    }
    this.handleAddtoCart = this.handleAddtoCart.bind(this)
  }

  componentWillMount(nextProps) {
    Moltin.Authenticate().then((response) => {
      console.log('authenticated', response);
    });
    let that = this
    const products = Moltin.Products.All().then((products) => {
      console.log("products= ",products);
      that.setState({products: products.data})
      const cart = Moltin.Cart().Items();
      that.setState({cartItems: cart})
    });
  }

  handleAddtoCart(productId) {
    let that = this
    Moltin.Cart().AddProduct(productId, 1).then((item) => {
      console.log("added to cart", item);
      const cart = Moltin.Cart().Items();
      console.log('cart items=', cart);
      that.setState({cartItems: cart})
      alert(`Added ${item.data.length} items to your cart`);
    });
  }

  render() {
    console.log('render parent', this.state);
    return (
      <Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>
            <Headernav cartItems={this.state.cartItems}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>
            {
              !_.isEmpty(this.state.products) &&
              <ItemList products={this.state.products} handleAddtoCart={this.handleAddtoCart}/>
            }
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
