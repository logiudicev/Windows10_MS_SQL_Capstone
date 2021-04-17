import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MissionDetails from './Components/MissionDetails'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap/';
import Creators from './Components/Creators.js'
import MissionSummary from './MissionSummary';
import Header from './../src/assets/images/transparent_logo_2.png'
import Background from './../src/assets/images/hmmwv_blur_30percent.jpg'
//import './node_modules/bootstrap/dist/js/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
global.jQuery = require('jquery');
require('bootstrap');

export class App extends Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      equipmentList: [],
      soldierList: [],
      vehicleList: [],
      missionList: [],
      currentMission: {},
    }

  }

  setCurrentMission(newMission)
  {
    console.log('firing setter')
    this.setState({ currentMission: newMission })
  }

  async componentDidMount()
  {
    await this.fetch("equipment", "equipmentList");
    await this.fetch("vehicle", "vehicleList");
    await this.fetch("soldier", "soldierList");
    await this.fetch("mission", "missionList");
  }

  async fetch(varName, stateKey)
  {
    try
    {
      const url = "http://localhost:8080/convoys/" + varName;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      this.setState({ [stateKey]: json })
    }
    catch (error)
    {
      console.error(error);
    }
  }
  //
  render()
  {
    return (
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
        <Container fluid >
          <Row >
            <Col>

                <img src={Header} className="rounded mx-auto d-block" alt="..." style ={{imageSize: 'cover', height: "15vh"}}></img>

                <div style={{height: "25vh"}}>
                  <Creators fetch={this.fetch.bind(this)} />
                </div>
                <div className=" overflow-auto scrollbar-warning" style={{height: "60vh"}} >
                  <MissionSummary className="align-bottom"
                    currentMission={this.state.currentMission}
                    soldierList={this.state.soldierList}
                    vehicleList={this.state.vehicleList}
                    equipmentList={this.state.equipmentList}
                  />
                </div>
            </Col>
              <Col>
                <MissionDetails soldierList={this.state.soldierList}
                  missionList={this.state.missionList}
                  vehicleList={this.state.vehicleList}
                  equipmentList={this.state.equipmentList}
                  fetch={this.fetch.bind(this)}
                  setCurrentMission={this.setCurrentMission.bind(this)} />
              </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default App



