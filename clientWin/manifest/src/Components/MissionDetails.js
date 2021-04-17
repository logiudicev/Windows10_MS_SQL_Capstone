import React from 'react'
import PropTypes from 'prop-types'
import MissionList from './MissionList'
import SoldierList from './SoldierList'
import VehicleList from './VehicleList'
import EquipmentList from './EquipmentList'

const MissionDetails = props =>
{
    return (
        <div>
            <div>
                <MissionList fetch={props.fetch}
                    missionList={props.missionList}
                    vehicleList={props.vehicleList}
                    setCurrentMission={props.setCurrentMission} />
            </div>
            <div>
                <VehicleList fetch={props.fetch}
                    missionList={props.missionList}
                    vehicleList={props.vehicleList}
                    soldierList={props.soldierList} />
            </div>
            <div>
                <SoldierList fetch={props.fetch}
                    soldierList={props.soldierList}
                    equipmentList={props.equipmentList}
                    vehicleList={props.vehicleList} />
            </div>
            <div>
                <EquipmentList fetch={props.fetch}
                    equipmentList={props.equipmentList}
                    soldierList={props.soldierList} />
            </div>
        </div>
    )
}

MissionDetails.propTypes = {
    soldierList: PropTypes.array,
    missionList: PropTypes.array,
    vehicleList: PropTypes.array,
    equipmentList: PropTypes.array,
}

export default MissionDetails
