// fetch
// map to a list of Equipment

import React from 'react'
import PropTypes from 'prop-types'
import Equipment from './Equipment.js'

const EquipmentList = props =>
{

    // builds out the list of equipm
    const listContent = props.equipmentList.map(equipObj =>
    {
        return <Equipment fetch = {props.fetch} key={equipObj.equipmentId} equip={equipObj} soldierList={props.soldierList} />
    })

    // CONST VARIABLES AT THE BOTTOM
    return (
        <div className="table-wrapper-scroll-y overflow-auto" style={{height: "25vh"}}>
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

EquipmentList.propTypes = {
    equipmentList: PropTypes.array,
}

export default EquipmentList;

const tableTitle = <thead>
<tr>
    <td colSpan="4" className="py-0">
        <h1 className="text-center">
            Equipment
        </h1>
    </td>
</tr>
</thead>;

const tableHeader =  <thead className = "thead-dark">
<tr>
    <th style = {{ position: "sticky", top: "0"}}>Name</th>
    <th style = {{ position: "sticky", top: "0"}}>Weight</th>
    <th style = {{ position: "sticky", top: "0"}}>Assigned to:</th>
    <th style = {{ position: "sticky", top: "0"}}> Actions </th>
</tr>
</thead>;