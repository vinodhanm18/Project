import React, { Component } from "react";
import axios from "axios";
import "./table.css";

class Construct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            Cname: "",
            Caddress: "",
            Siteno: "",
            GST: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/show").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handleidChange = (event) => {
        this.setState({ id: event.target.value });
    };
    handleCname = (event) => {
        this.setState({ Cname: event.target.value });
    };
    handleCaddress = (event) => {
        this.setState({ Caddress: event.target.value });
    };
    handleSiteno = (event) => {
        this.setState({ Siteno: event.target.value });
    };
    handleGST = (event) => {
        this.setState({ GST: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            Cname: this.state.Cname,
            Caddress: this.state.Caddress,
            Siteno: this.state.Siteno,
            GST: this.state.GST,
        };
        console.log(data);
        axios.post("http://localhost:8080/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                id: "",
                Cname: "",
                Caddress: "",
                Siteno: "",
                GST: "",
            });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/delete/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (Constructions) => Constructions.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            Cname: data.Cname,
            Caddress: data.Caddress,
            Siteno: data.Siteno,
            GST: data.GST,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            Cname: this.state.Cname,
            Caddress: this.state.Caddress,
            Siteno: this.state.Siteno,
            GST: this.state.GST,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:2022/update/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    id: "",
                    Cname: "",
                    Caddress: "",
                    Siteno: "",
                    GST: "",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">ID</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.id}
                        onChange={this.handleidChange}
                    />
                    <br /><br />
                    <label className="login-label">Cname</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Cname}
                        onChange={this.handleCname}
                    />
                    <br /><br />

                    <label className="login-label">Caddress</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Caddress}
                        onChange={this.handleCaddress}
                    />
                    <br /><br />

                    <label className="login-label">SiteNo</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.Siteno}
                        onChange={this.handleSiteno}
                    />
                    <br /><br />

                    <label className="login-label">GST</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.GST}
                        onChange={this.handleGST}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cname</th>
                            <th>Caddress</th>
                            <th>Siteno</th>
                            <th>GST</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.customername}</td>
                                <td>{data.customerAddress}</td>
                                <td>{data.siteNumber}</td>
                                <td>{data.GST}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>:</label>
                    <input
                        type="text"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Cname:</label>
                    <input
                        type="text"
                        name="Cname"
                        value={this.state.Cname}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Caddress:</label>
                    <input
                        type="text"
                        name="Caddress"
                        value={this.state.Caddress}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Siteno:</label>
                    <input
                        type="number"
                        name="Siteno"
                        value={this.state.Siteno}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>GST:</label>
                    <input
                        type="number"
                        name="GST"
                        value={this.state.GST}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Construct;