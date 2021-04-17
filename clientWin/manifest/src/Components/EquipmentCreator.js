import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Row, Col, Form, Button} from 'react-bootstrap/';

export default class EquipmentCreator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             weight: null,
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
        await this.postEquipment();
        await this.props.fetch("equipment", "equipmentList");
        console.log("info: ", this.state.name, this.state.weight)
    }
    //https://stackoverflow.com/questions/57924809/handling-multiple-inputs-in-react

    async postEquipment()
    {
        try
        {
            const newEquipment = {"name": this.state.name, "weight" : this.state.weight}

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEquipment)
            };
            
            const url = "http://localhost:8080/convoys/equipment";
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
            <InputGroup className="mb-3" >
                <FormControl
                    type="text"
                    name="name"
                    placeholder="Equipment Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    name="weight"
                    placeholder="Equipment Weight"
                    value={this.state.weight}
                    onChange={this.handleChange}
                />
                <InputGroup.Append>
                    <Button variant="success" type = "submit" >🛠</Button>
                </InputGroup.Append>
            </InputGroup>
            </Form> 
        )
    }
}