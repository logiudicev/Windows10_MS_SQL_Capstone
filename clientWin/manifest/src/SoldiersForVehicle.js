import React from 'react'
import PropTypes from 'prop-types'
import EquipmentForSoldier from './EquipmentForSoldier'

const SoldiersForVehicle = props =>
{

    const passengers = props.soldierList.map(soldierObj => 
    {
        if (soldierObj.vehicleId === props.vehicleId) 
        {
            return (
                <li key={soldierObj.soldierId} className="list-group-item">
                    <strong><span className="mr-2">{soldierObj.ranks}</span>
                    <span className="mr-2">{soldierObj.name}</span></strong>
                    <span className="mr-2">{soldierObj.role}</span>
                    <EquipmentForSoldier soldierId = {soldierObj.soldierId}
                        equipmentList={props.equipmentList} />
                </li>
            )

        }

    })

    return (
        <ul className="list-group list-group-flush">
            {passengers}
        </ul>
    )
}

SoldiersForVehicle.propTypes = {
    soldierList: PropTypes.array,
    equipmentList: PropTypes.array,
    vehicleId: PropTypes.number,
}

export default SoldiersForVehicle
