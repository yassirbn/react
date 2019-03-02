import React, { Component } from 'react';
import './Home.css';


class Home extends Component {



    render() {
        return(
            <div>
                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td><i className="fas fa-edit"></i></td>
                        <td><i className="fas fa-trash-alt"></i></td>
                    </tr>

                </table>
            </div>

        )

    }

}

export default Home;