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
      items: []
    }
    this.handleAddtoCart = this.handleAddtoCart.bind(this)
  }
  handleAddtoCart(productId) {
    this.props.handleAddtoCart(productId)
  }
  componentWillMount() {
    this.setState({items: this.props.products}, ()=> {
      console.log('items in itemlist set=', this.state.items);
    })
  }
  coponentWillRecieveProps(nextProps) {
    this.setState({items: nextProps.products}, ()=> {
      console.log('items in itemlist set=', this.state.items);
    })
  }

    render() {
      console.log('itemlist render=', this.state.items, this.props);
      let {items} = this.state
      return (
      <Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>

          <Grid container>
            <Grid.Row textAlign="center" verticalAlign="middle">

                  {
                    items.map(item => (
                      <Grid.Column key={item.id} textAlign="center" verticalAlign="middle" width={5}>
                      <Card>
                      <Card.Content>
                        <Card.Header>
                          {_.capitalize(item.name)}
                        </Card.Header>
                        <Card.Meta>
                         {item.description} <br />
                         {item.meta.stock.availability} {item.meta.stock.level}
                        </Card.Meta>
                        <Card.Description>
                          {item.meta.display_price.with_tax.formatted}  {item.price[0].amount} {item.price[0].currency}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button basic color='green' onClick={e=>this.handleAddtoCart(item.id)}>Add to Cart</Button>
                        </div>
                      </Card.Content>
                    </Card>
                    </Grid.Column>
                  ))
                }
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
