import React from 'react'
import PropTypes from 'prop-types'
import SoldiersForVehicle from './SoldiersForVehicle'

const VehiclesForMission = props =>
{
    //builds the list of vehicles for the current mission
    const vehiclesForMission = props.vehicleList.map(vehicleObj => 
    {
        if (vehicleObj.missionId === props.missionId)
        {
            return (
                <li key={vehicleObj.vehicleId} className="list-group-item">
                    <h4>{vehicleObj.type}</h4>
                    <span className ="mr-2"><strong >Capacity: </strong>{vehicleObj.capacity}</span> 
                    <strong>Weight:</strong> {vehicleObj.bumperNum}
                    <SoldiersForVehicle vehicleId={vehicleObj.vehicleId}
                        soldierList={props.soldierList}
                        equipmentList={props.equipmentList}
                    />
                </li>
            )
        }
    })


    return (
        <ul className="list-group ">
            {vehiclesForMission}
        </ul>
    )
}

VehiclesForMission.propTypes = {
    missionId: PropTypes.number,
    vehicleList: PropTypes.array,
}


export default VehiclesForMission
