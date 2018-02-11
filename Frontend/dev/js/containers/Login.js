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
import Headernav from 'AppContainers/Header'

var classes = {

logintext: {
  paddingTop: 250,
  textAlign: 'center',
  height: "100%",
  width: '100%'
}
}

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e,{name,value}) {
    console.log(e,{name,value});
    let user = this.state.user;
    user[name] = value;
    this.setState({user:user});
    // this.setState({disableButton: false, errorOpen: false})
  }

  handleLogin() {

  }

    render() {
      return (<Grid container>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Headernav />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" width={16}>
            <Segment size='large' raised={true}>
              <Header as='h3' style={{'fontSize': '16px'}} >
                {"Login"}
              </Header>
              <Form>
                    <Form.Field
                      classname={classes.logintext}
                      control={Input}
                      value={this.state.user.email}
                      name='email'
                      type='email'
                      label='Email Address'
                      placeholder='youremail@xyz.com'
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

export default connect(mapStateToProps)(LoginPage);
