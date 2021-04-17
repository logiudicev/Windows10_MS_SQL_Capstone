import React from 'react'
import PropTypes from 'prop-types'

const Vehicle = props =>
{

    // finds the parent Mission for each Vehicle
    const missionName = () => {
        for (let mission of props.missionList)
        {
            if (mission.missionId === props.vehicle.missionId)
            {
                return mission.name; 
            }
        }
    }


    // function to PATCH the vehicle ID for a soldier
    async function addItem(id)
    {
        try
        {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.vehicle)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/soldier/add/" + id;
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json);
            props.fetch("soldier", "soldierList") // refreshes
        }
        catch (error)
        {
            console.error(error);
        }
    }

    async function deleteItem(id)
    {
        try
        {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/vehicle/" + id;
            const response = await fetch(url, requestOptions);
            console.log(response);
            props.fetch("vehicle", "vehicleList")
        }
        catch (error)
        {
            console.error(error);
        }
    }

    // creates the options for the assignment button
    const listContent = props.soldierList.map(soldierObj =>
    {
        return <li key={soldierObj.soldierId} className="dropdown-item" onClick={() => addItem(soldierObj.soldierId)}> {soldierObj.name} </li>
    })

    return (
        <tr>
            <td style={{ width: "12%" }}>{props.vehicle.bumperNum}</td>
            <td>{props.vehicle.type}</td>
            <td style={{ width: "12%" }}>{props.vehicle.capacity}</td>
            <td style={{ width: "16%" }}>
                <h4><span className="badge badge-secondary">{missionName()}</span></h4>
            </td>
            <td style={{ width: "33%" }}>
                <button
                    onClick={() => deleteItem(props.vehicle.vehicleId)}
                    className="btn btn-danger waves-effect mr-2"> Delete
                    </button>
                <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Assign Soldiers
                    </button>
                <div className="dropdown-menu" position="relative">
                    {listContent}
                </div>
            </td>
        </tr>
    )
}

Vehicle.propTypes = {
    vehicle: PropTypes.object,
    soldierList: PropTypes.array,
    missionList: PropTypes.array,
}

export default Vehicle
