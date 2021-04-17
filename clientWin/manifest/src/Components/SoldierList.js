import React from 'react'
import PropTypes from 'prop-types'
import Soldier from './Soldier.js'
import { btn } from 'bootstrap' // DO NOT DELETE THIS OTHERWISE DROPDOWN FAILS


const SoldierList = props =>
{

    // builds out the list of equipm
    const listContent = props.soldierList.map(soldierObj =>
    {
        return <Soldier fetch = {props.fetch}
            key={soldierObj.soldierId}
            soldier={soldierObj} 
            equipmentList={props.equipmentList} 
            vehicleList={props.vehicleList} />
    })

    // TODO REMOVE THIS INLINE STYLING
    return (
        <div className="table-wrapper-scroll-y overflow-auto " style={{height: "25vh"}}>
            <table className="table  table-hover">
                {tableTitle}
                {tableHeader}

                <tbody>
                    {listContent}
                </tbody>
            </table>
        </div>

    )
}

SoldierList.propTypes = {
    soldierList: PropTypes.array,
}

export default SoldierList;

const tableTitle =
    <thead>
        <tr>
            <td colSpan="5" className="py-0">
                <h1 className="text-center">
                    Soldiers
        </h1>
            </td>
        </tr>
    </thead>;

const tableHeader =
    <thead className = "thead-dark">
        <tr>
            <th style = {{ position: "sticky", top: "0"}}>Rank</th>
            <th style = {{ position: "sticky", top: "0"}}>Name</th>
            <th style = {{ position: "sticky", top: "0"}}>Role</th>
            <th style = {{ position: "sticky", top: "0"}}>Assigned to:</th>
            <th style = {{ position: "sticky", top: "0"}}>Actions</th>
        </tr>
    </thead>;