import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    
    constructor(prop){
        super(prop);
        this.state={
            email:"",
            password:""

        };
        this.login();

    }

    componentDidMount() {
        console.log('Did Mount');
        console.log(this.state.email);
    }

    componentWillMount() {
        console.log('will Mount');
    }
    login(){
        console.log('Login');
        console.log(this.state.email);
        console.log(this.state.password);

    }
    render() {
        return(
            <div>
                < form   action = "/action_page.php" >
                    < div className = "imgcontainer" >
                    < img src = "https://www.w3schools.com/howto/img_avatar2.png"alt = "Avatar" className = "avatar" />

                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required onchange={event=>this.setState({email:event.target.value})}/>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onchange={event=>this.setState({password:event.target.value})} />

                            <button type="submit" onClick={this.login.bind(this)}>Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember"/> Remember me
                            </label>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                    </div>
                </form>
            </div>

        )

    }

}

export default Login;