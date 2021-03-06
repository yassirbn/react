import React, { Component } from 'react';
import './Home.css';
import axios from "axios";


class Home extends Component {
    constructor(prop){
        super(prop);
        this.state = {

            users: []
        }

    }

    componentDidMount() {
        console.log('Did Mount');

        axios.get("http://localhost:3001/users/all").then(
            item => {

                console.log(item["data"].data)
                console.log(JSON.parse(JSON.stringify(item["data"])).data)


                this.setState({users: item["data"].data})
            }
        )
    }

    componentWillMount() {
        console.log('will Mount');
    }

    GetAllUsers(){




    }


    render() {
        return(
            <div>

                <table id="customers">
                    <tbody>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    {

                        this.state.users.map(item =>


                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td><i className="fa fa-edit"></i></td>
                                <td><i className="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>


            </div>

        )

    }

}

export default Home;