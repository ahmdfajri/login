import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import axios from 'axios';
class Signup extends Component {
    state = {
        first_name:'',
        last_name:'',
        address:'',
        email:'',
        password:''
      }
      kirimData = () => {
        var url = 'http://localhost:1234/register'
        axios.post(url,{
          first_name: this.refs.first_name.value,
          last_name: this.refs.last_name.value,
          address: this.refs.address.value,
          email: this.refs.email.value,
          password: this.refs.password.value,
        })
        .then((x)=>{
          console.log(x)
          this.setState({response: x.data})
        })
        .catch((x)=>{
          console.log('gagal')
        })
      }
      
    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                       <p>First Name:</p>
                       <input ref="first_name"></input>
                       <br/>
                       <p>Last Name:</p>
                       <input ref="last_name"></input>
                       <br/>
                       <p>Address</p>
                       <input ref="address"></input>
                       <br/>
                       <p>Email:</p>
                       <input ref="email"></input>
                       <br/>
                       <p>Password:</p>
                       <input ref="password"></input>
                       <button onClick={this.kirimData}>Create My Account</button>
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        );
    }
}

export default Signup;