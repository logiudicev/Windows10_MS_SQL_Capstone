import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VehiclesForMission from './VehiclesForMission'

export class MissionSummary extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {

        }
    }



    render()
    {
        // if no mission selected, render msg
        if (this.props.currentMission.missionId == undefined)
        {
            return <h1 className ="text-center" style={{color: '#787775'}}><i>Select from Mission Table to see details</i></h1>
        }
        else
        {
            return (
                <div className="mt-6">
                    <h3>Mission Name: {this.props.currentMission.name}</h3>
                    <h3> Mission Status: {this.props.currentMissionmissionStatus ? "Incomplete" : "Complete"}</h3>
                    <h5>BLUF: {this.props.currentMission.bluf}</h5>
                    <VehiclesForMission missionId={this.props.currentMission.missionId}
                        vehicleList={this.props.vehicleList}
                        soldierList={this.props.soldierList}
                        equipmentList={this.props.equipmentList}
                    />
                </div>
            )
        }
    }
}

MissionSummary.propTypes = {
    currentMission: PropTypes.object,
    soldierList: PropTypes.array,
    vehicleList: PropTypes.array,
    equipmentList: PropTypes.array,
}

export default MissionSummary
