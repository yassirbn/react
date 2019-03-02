import React, { Component } from 'react';
import './Register.css';


class Register extends Component {



    render() {
        return(
            <div>
                < div className = "imgcontainer" >
                    < img src = "https://www.w3schools.com/howto/img_avatar2.png"alt = "Avatar" className = "avatar" />

                    <div className="container">
                        <label htmlFor="uname"><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="fame" required />

                        <label htmlFor="uname"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter First Name" name="lame" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Last Password" name="psw" required />

                        <button>Sign in</button>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Login</button>
                    </div>
                </div>
            </div>

        )

    }

}

export default Register;