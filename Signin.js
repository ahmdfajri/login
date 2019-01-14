import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import axios from 'axios';
class Signin extends Component {
    state = {
        data : [] 
      }
    ambilData = () => {
        var url = 'http://localhost:1234/login'
        axios.get(url)
        .then((x)=>{
        console.log(x)
        this.setState({data: x.data})
       }).catch((x)=>{
         console.log(x)
       })
      }
    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                    <CardText>
                        <p>Username:</p>
                       <input placeholder="tulis username"></input>
                       <br/>
                       <p>Password:</p>
                       <input placeholder="tulis password" type="password"></input>
                       <br/>
                       <button onClick={this.ambilData}>Sign In</button>
                       <a href="/Signup" class="waves-effect waves-light btn">Sign Up</a>
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

export default Signin;