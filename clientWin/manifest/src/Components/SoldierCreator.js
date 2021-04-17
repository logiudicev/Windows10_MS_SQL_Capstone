import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownButton, InputGroup, FormControl, Row, Col, Form, Button } from 'react-bootstrap/';

export default class SoldierCreator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            ranks: "",
            role: "",
            dropdownTitle:"Rank",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("HANDLE CHANGE")
        this.setState({ [event.target.name]: event.target.value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.postSoldier();
        await this.props.fetch("soldier", "soldierList");
        console.log("info: ", this.state.name, this.state.ranks, this.state.role)
    }
    //https://stackoverflow.com/questions/57924809/handling-multiple-inputs-in-react

    async postSoldier() {
        try {
            const newSoldier = { "name": this.state.name, "role": this.state.role, "ranks": this.state.ranks }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSoldier)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/soldier";
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json);
        }
        catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3" > 
                    <DropdownButton variant="secondary"
                                as={InputGroup.Prepend}
                                title={this.state.dropdownTitle}  
                                onSelect={(evt)=>{this.setState({ranks:evt, dropdownTitle:evt})}}>
                        <Dropdown.Item eventKey="PVT">PVT</Dropdown.Item>
                        <Dropdown.Item eventKey="SPC">SPC</Dropdown.Item>
                        <Dropdown.Item eventKey="SGT">SGT</Dropdown.Item>
                        <Dropdown.Item eventKey="SSG">SSG</Dropdown.Item>
                        <Dropdown.Item eventKey="SFC">SFC</Dropdown.Item>
                        <Dropdown.Item eventKey="MSG">MSG</Dropdown.Item>
                        <Dropdown.Item eventKey="1SG">1SG</Dropdown.Item>
                        <Dropdown.Item eventKey="SGM">SGM</Dropdown.Item>
                        <Dropdown.Item eventKey="CSM">CSM</Dropdown.Item>
                        <Dropdown.Item eventKey="WO1">WO1</Dropdown.Item>
                        <Dropdown.Item eventKey="CW2">CW2</Dropdown.Item>
                        <Dropdown.Item eventKey="CW3">CW3</Dropdown.Item>
                        <Dropdown.Item eventKey="CW4">CW4</Dropdown.Item>
                        <Dropdown.Item eventKey="CW5">CW5</Dropdown.Item>
                        <Dropdown.Item eventKey="2LT">2LT</Dropdown.Item>
                        <Dropdown.Item eventKey="1LT">1LT</Dropdown.Item>
                        <Dropdown.Item eventKey="CPT">CPT</Dropdown.Item>
                        <Dropdown.Item eventKey="MAJ">MAJ</Dropdown.Item>
                        <Dropdown.Item eventKey="LTC">LTC</Dropdown.Item>
                        <Dropdown.Item eventKey="COL">COL</Dropdown.Item>
                        <Dropdown.Item eventKey="BG">BG</Dropdown.Item>
                        <Dropdown.Item eventKey="MG">MG</Dropdown.Item>
                        <Dropdown.Item eventKey="LTG">LTG</Dropdown.Item>
                        <Dropdown.Item eventKey="GEN">GEN</Dropdown.Item>
                    </DropdownButton>
                        
                    <FormControl
                        type="text"
                        name="name"
                        placeholder="Soldier's Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <FormControl
                        type="text"
                        name="role"
                        placeholder="Soldier's Role"
                        value={this.state.role}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append> 
                        <Button variant="success" type="submit">👨🏼‍✈️</Button>
                    </InputGroup.Append>
                </InputGroup>   
            </Form>
        )
    }
}