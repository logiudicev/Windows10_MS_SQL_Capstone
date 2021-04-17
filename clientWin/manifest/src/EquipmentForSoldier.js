import React from 'react'
import PropTypes from 'prop-types'

const EquipmentForSoldier = props => {
    const soldierEquipment = props.equipmentList.map(equipObj => {
        if (equipObj.soldierId === props.soldierId)
        {
            return (
                <li key={equipObj.equipmentId} className="list-group-item">
                    <span className="mr-2"><strong>Type:</strong> {equipObj.name}</span>
                    <span className="mr-2"> <strong>Weight:</strong> {equipObj.weight}</span>
                </li>
            )
        }
    })
    return (
        <ul className="list-group list-group-flush">
            {soldierEquipment}
        </ul>
    )
}

EquipmentForSoldier.propTypes = {
    soldierId: PropTypes.number,
    equipmentList: PropTypes.array,
}

export default EquipmentForSoldier
