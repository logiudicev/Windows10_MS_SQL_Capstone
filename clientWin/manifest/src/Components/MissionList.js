// fetch
// map to a list of Equipment

import React from 'react'
import PropTypes from 'prop-types'
import Mission from './Mission.js'


const MissionList = props =>
{

    // builds out the list of equipm
    const listContent = props.missionList.map(missionObj =>
    {
        return <Mission key={missionObj.missionId}
            mission={missionObj}
            fetch={props.fetch}
            vehicleList={props.vehicleList}
            setCurrentMission = {props.setCurrentMission}
        />
    })

    // TODO REMOVE THIS INLINE STYLING
    return (
        <div className="table-wrapper-scroll-y overflow-auto" style={{ height: "25vh" }}>
            <table className="table table-hover">
                {tableTitle}
                {tableHeader}
                <tbody>
                    {listContent}
                </tbody>
            </table>
        </div>
    )
}

MissionList.propTypes = {
    missionList: PropTypes.array,
    vehicleList: PropTypes.array
}

export default MissionList;

//builds out the table's title as a table row
const tableTitle = <thead>
    <tr>
        <td colSpan="4" className="py-0">
            <h1 className="text-center">
                Missions
        </h1>
        </td>
    </tr>
</thead>;

// builds out the table's header and the various column labels
const tableHeader = <thead className="thead-dark">
    <tr >
        <th style={{ position: "sticky", top: "0" }}>Status</th>
        <th style={{ position: "sticky", top: "0" }}>Name</th>
        <th style={{ position: "sticky", top: "0" }}>BLUF</th>
        <th style={{ position: "sticky", top: "0" }}>Actions</th>
    </tr>
</thead>;