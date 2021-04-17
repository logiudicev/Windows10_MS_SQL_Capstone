import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from './Vehicle.js'

const VehicleList = props =>
{
    // builds out the list of equipm
    const listContent = props.vehicleList.map(vehicleObj =>
    {
        return <Vehicle key={vehicleObj.vehicleId}
            vehicle={vehicleObj}
            fetch={props.fetch}
            soldierList={props.soldierList}
            missionList={props.missionList}
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

VehicleList.propTypes = {
    vehicleList: PropTypes.array
}

export default VehicleList

const tableTitle = <thead>
    <tr>
        <td colSpan="100%" className="py-0">
            <h1 className="text-center">
                Vehicles
        </h1>
        </td>
    </tr>
</thead>;

const tableHeader = <thead className="thead-dark">
    <tr>
        <th style={{ position: "sticky", top: "0" }}>Bumper #</th>
        <th style={{ position: "sticky", top: "0" }}>Type</th>
        <th style={{ position: "sticky", top: "0" }}>Capacity</th>
        <th style={{ position: "sticky", top: "0" }}>Assigned to:</th>
        <th style={{ position: "sticky", top: "0" }}>Actions</th>
    </tr>
</thead>;