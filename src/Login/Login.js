import React, { Component } from 'react';
import imgLeft from '../images/HeroMain.jpg';
import './Login.css';
import NavBar from '../NavBar/NavBar';

class Login extends Component {

    user;
    password;

    constructor(props){
        super();
        this.state = {user: '', password: '', hidden: true, auth:false};
        this.user = '';
        this.pass = '';
        this.toggleShow = this.toggleShow.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }

    async loginAPICall(user, password) {
        var url = 'https://inblock.mbr-test.com:8443/api-inblock/v1/login';

        const resp = await fetch(url, {
            method: 'POST',
            headers: 
                { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
            body: JSON.stringify(
                {
                    username: user, 
                    password: password
                }
            )
        });

        const data = await resp.json();

        localStorage.setItem("token", data.token);
        console.log(data);

        return data.auth;
    }

    handleChangeUser (e) {
        this.setState({user: e.target.value});
    }
    handleChangePassword (e) {
        this.setState({password: e.target.value});
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    async handleClick () {
        this.setState({user: this.user, password: this.pass})
        var event = new Event('input', { bubbles: true });
        console.log('User: '+this.state.user);
        console.log('Password: '+this.state.password);
        console.log('Lets go into invoices ->');
        localStorage.setItem("user", this.state.user);
        var auth = await this.loginAPICall(this.state.user, this.state.password);
        console.log(auth)
        if(auth == true){
            console.log("Go to invoices");
            this.routeChange();
        }else{
            console.log("Error")
        }
    }

    routeChange() {
        let path = `invoices`;
        this.props.history.push(path);
    }

  render() {
    return (
        <div className="loginContainer">
            <NavBar />
            <div className="image-left">
                <img src={imgLeft} alt="Logo HeroMain"/>
            </div>
            
            <div className="containerLogin">
                <div className="containerLoginBoxes">
                    <h1>Sign in to EY Blockchain</h1>
                    <input type="text" className="boxUser" name="user" placeholder="User" onChange={this.handleChangeUser.bind(this)} />
                    <input type={this.state.hidden ? "password" : "text"} className="boxPassword" name="password" placeholder="Password" onChange={this.handleChangePassword.bind(this)} />
                    <button className="imageButton" onClick={this.toggleShow}></button>
                    {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                    {/* <div class="error"><span>error: {{errorMessage}}</span></div> */}

                    <br/><br/>
                            
                    <span className="remPass"><a href="!#" style={{'color': 'black', 'fontWeight': 'bold'}}>forgot password?</a></span>
                
                    <button className="loginButton" onClick={this.handleClick.bind(this)}> Sign in </button>

                    <br/><br/>
                
                    <span className="remPass2">By signing in, you agree to our 
                        <a href="!#" style={{'color': 'rgb(48, 70, 194)', 'fontWeight': 'bold'}}>Terms of Use</a> and 
                        <a href="!#" style={{'color': 'rgb(48, 70, 194)', 'fontWeight': 'bold'}}> Privacy Policy</a>
                    </span>
                            
                    <br/><br/>                        

                    <span className="remPass2">Not a member yet?  
                        <a href="!#" style={{'color': 'black', 'fontWeight': 'bold'}}> Get Started</a>
                    </span>
                
                </div>
            </div>
        </div>
    );
  }

}

export default Login;