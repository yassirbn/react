import React, { Component } from 'react';
import './Products.css';
import axios from "axios";


class Products extends Component {
    constructor(prop){
        super(prop);
        this.state = {

            prods: []
        }

    }

    componentDidMount() {
        console.log('Did Mount');
        const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2E0MmU3MTBmYmZmMWExNDZjYzQzOSIsImlhdCI6MTU1MjAwMDk2NiwiZXhwIjoxNTUyMDA0NTY2fQ.Kn7-pbTQlCZdzuUdnAT1MDa-C2mdCUkFuc8a964hUlM";
        axios.get("http://localhost:3001/prods/all",{"headers":{"x-access-token":token}}).then(
            item => {

                console.log(item["data"].data)
                console.log(JSON.parse(JSON.stringify(item["data"])).data)


                this.setState({prods: item["data"].data})
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
                        <th>name</th>
                        <th>price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    {

                        this.state.prods.map(item =>


                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
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

export default Products;