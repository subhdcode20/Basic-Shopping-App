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
  Container,
  Image
} from 'semantic-ui-react'
import _ from 'lodash'
import FontAwesome from 'react-fontawesome'
import Moltin from 'AppComponents/Moltin'
import Headernav from 'AppContainers/Header'

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
      cartItems: [],
      cartMetaData: {},
      showAddressInput: false,
      address: {
        first_name: 'Customer',
        last_name: 'vVents',
        line_1: '123 Sunny Street',
        line_2: 'Sunnycreek',
        county: 'California',
        postcode: 'CA94040',
        country: 'US'
      },
      customer: {
        email: 'customer@vvents.com',
        name: 'Customer vVents'
      }

    }
    this.handleAddressInput = this.handleAddressInput.bind(this)
    this.handlePayOrder = this.handlePayOrder.bind(this)
  }
  handleAddressInput(productId) {
    // this.props.handleAddressInput(productId)
  }
  handlePayOrder() {
    // this.setState({showAddressInput: true})
    let {customer, address} = this.state
    var order = Moltin.Cart().Checkout(customer, address).then(order => {
      console.log("order", order);
      Moltin.Orders.Payment(order.data.id, {
        gateway: 'stripe',
        method: 'purchase',
        first_name: 'Customer',
        last_name: 'vVents',
        number: '4242424242424242',
        month: '02',
        year: '2020',
        verification_value: '123'
      })
      .then(result => {

      })
    })
  }
  componentWillMount() {
    Moltin.Cart().Items().then(cart => {
      console.log('got cart items=', cart);
      this.setState({cartItems: cart.data, cartMetaData: cart.meta}, () => {
        console.log('cart items set=', this.state);
      })


    })
  }
  coponentWillRecieveProps(nextProps) {
    // this.setState({cartItems: nextProps.products}, ()=> {
    //   console.log('cartItems in itemlist set=', this.state.cartItems);
    // })
  }

    render() {
      console.log('cartlist render=', this.state.cartItems, this.props);
      let {cartItems} = this.state
      let totalAmount = _.isEmpty(this.state.cartMetaData) ? '' : this.state.cartMetaData.display_price.with_tax.formatted
      return (
      <Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16} floated="left">
            <Headernav cartItems={this.state.cartItems}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16} floated="left">
            Product added to cart:
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>

          <Grid container>

            <Grid.Row textAlign="center" verticalAlign="middle">
                  {
                    !_.isEmpty(cartItems) && (
                    cartItems.map(item => (
                        <Grid.Column key={item.id} textAlign="center" verticalAlign="middle" width={5}>
                        <Card>
                        <Card.Content>
                          <Image floated='right' size='mini' src='/assets/banana.jpg' />
                          <Card.Header>
                            {_.capitalize(item.name)}
                          </Card.Header>
                          <Card.Meta>
                           {item.description}
                          </Card.Meta>
                          <Card.Description>
                            <Header>Quantity: {item.quantity}</Header>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          {item.meta.display_price.with_tax.value.formatted}
                        </Card.Content>
                      </Card>
                      </Grid.Column>
                  ))
                )
                }
              </Grid.Row>
            <Grid.Row textAlign="center" verticalAlign="middle">
              <Grid.Column textAlign="center" verticalAlign="middle" width={5} floated="left">
                <Button size="big" content={"Checkout " + totalAmount} onClick={this.handlePayOrder}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          </Grid.Column>
        </Grid.Row>
        {
          this.state.showAddressInput &&
          (<Grid.Row textAlign="center" verticalAlign="middle">
            <Grid.Column textAlign="center" verticalAlign="middle" width={5} floated="left" with={16}>
              Enter Shipping Address:
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="middle" width={5} floated="left" with={16}>
              <Segment size='large' raised={true}>
                <Header as='h3' style={{'fontSize': '16px'}} >
                  {"Login"}
                </Header>
                <Form>
                      <Form.Field
                        classname={classes.logintext}
                        control={Input}
                        value={this.state.user.email}
                        name='address'
                        type='address'
                        label='Address'
                        placeholder='23 Sunny Street, SunnyCreek'
                        onChange={this.onChange}
                        required />

                        <Form.Field
                          classname={classes.logintext}
                          control={Input}
                          value={this.state.user.password}
                          name='password'
                          type='password'
                          label='Password'
                          placeholder='********'
                          onChange={this.onChange}
                          required />
                      <br/>
                </Form>
                <Button content="Login" size="huge" onClick={this.handleLogin} />
                <br/>
                <br/>
              </Segment>
            </Grid.Column>
          </Grid.Row>)
        }
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
