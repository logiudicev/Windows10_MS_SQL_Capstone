import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Row, Col, Form, Button} from 'react-bootstrap/';

export default class VehicleCreator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type: "",
             capacity: "",
             bumperNum: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {   
        this.setState({ [event.target.name] : event.target.value })
    }
   
    async handleSubmit(event)
    {
        event.preventDefault();
        await this.postVehicle();
        await this.props.fetch("vehicle", "vehicleList");
        console.log("info: ", this.state.type, this.state.capacity, this.state.bumperNum)
    }
    //https://stackoverflow.com/questions/57924809/handling-multiple-inputs-in-react

    async postVehicle()
    {
        try
        {
            const newVehicle = {"type": this.state.type, 
                                "capacity" : this.state.capacity, 
                                "bumperNum": this.state.bumperNum}

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newVehicle)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/vehicle";
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json);
        }
        catch (error)
        {
            console.error(error);
        }
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        name="type"
                        placeholder="Vehicle Type"
                        value={this.state.type}
                        onChange={this.handleChange}
                    />
                    <FormControl
                        type="number"
                        name="capacity"
                        placeholder="Vehicle Capacity"
                        value={this.state.capacity}
                        onChange={this.handleChange}
                    />
                    <FormControl
                        type="text"
                        name="bumperNum"
                        placeholder="Bumper Number"
                        value={this.state.bumperNum}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant="success" type = "submit">🚚</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        )
    }
}