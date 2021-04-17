import React, { Component } from 'react'
import SoldierCreator from './SoldierCreator'
import VehicleCreator from './VehicleCreator'
import EquipmentCreator from './EquipmentCreator'
import MissionCreator from './MissionCreator'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap/';
import PropTypes from 'prop-types'

export class Creators extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             soldierCreatorActive:true,
             equipmentCreatorActive: true,
             vehicleCreatorActive: true,
             missionCreatorActive: true,
             
        }
    }

    render() {
        return (
            
            <Col>
                <h3 className="text-center">Creator Section</h3>
                <SoldierCreator fetch={this.props.fetch.bind(this)} />
                <VehicleCreator fetch={this.props.fetch.bind(this)} />
                <EquipmentCreator fetch={this.props.fetch.bind(this)} />
                <MissionCreator fetch={this.props.fetch.bind(this)} />
            </Col>
        )
    }
}

Creators.propTypes = {
    fetch: PropTypes.func
}

export default Creators
