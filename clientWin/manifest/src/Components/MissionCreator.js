import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Row, Col, Dropdown, DropdownButton,Form,Button} from 'react-bootstrap/';

export default class MissionCreator extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: "",
            missionStatus: "true",
            bluf: "",
            dropDownTitle: "Status"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
            this.setState({ [event.target.name]: event.target.value })
    }

    async handleSubmit(event)
    {   
        event.preventDefault();
        await this.postMission();
        await this.props.fetch("mission", "missionList")
        console.log("info: ", this.state.type, this.state.capacity, this.state.bumperNum)
    }
    //https://stackoverflow.com/questions/57924809/handling-multiple-inputs-in-react

    async postMission()
    {
        try
        {
            const newMission = {
                "name": this.state.name,
                "missionStatus": this.state.missionStatus,
                "bluf": this.state.bluf
            }
            //DON'T REMOVE. HAS TO HAPPEN BECAUSE CONDITIONAL OBJECT REQUIRES OPPOSITES ON UI, BACKEND REQUIRES NON
            //OPPOSITES. I PROMISE YOU NEED THIS IF/ELSE
            if(newMission.missionStatus==="true"){newMission.missionStatus="false"}
            else{
                newMission.missionStatus="true"
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMission)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/mission";
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json);
        }
        catch (error)
        {
            console.error(error);
        }
    }

    customToggle=React.forwardRef(({children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));

    render()
    {
        return (
            <Form onSubmit={this.handleSubmit}>
            <InputGroup>
                <DropdownButton 
                        variant="secondary"
                        as={InputGroup.Prepend}
                        title={this.state.missionStatus === "false"
                        ? 'Inactive' : 'Active'}
                        onSelect={(evt)=>{this.setState({missionStatus:evt})}}>
                    <Dropdown.Item eventKey={true}>Active</Dropdown.Item>
                    <Dropdown.Item eventKey={false}>Inactive</Dropdown.Item>
                </DropdownButton>
                
                <FormControl 
                    type="text"
                    name="name" 
                    placeholder="Mission Name"
                    value={this.state.name}
                    onChange={this.handleChange}    
                />
                <FormControl 
                    type="text"
                    name="bluf" 
                    placeholder="Mission Summary"
                    value={this.state.bluf}
                    onChange={this.handleChange}    
                />
                <InputGroup.Append>
                    <Button variant="success" type="submit">✓</Button>
                </InputGroup.Append>

            </InputGroup>
        </Form>
        )
    }
}