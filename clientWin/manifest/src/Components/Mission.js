import React from 'react'
import PropTypes from 'prop-types'

const Mission = props =>
{
    async function addItem(id)
    {
        try
        {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.mission)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/vehicle/add/" + id;
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            console.log(json);
            props.fetch("vehicle", "vehicleList") // refreshes
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
            const url = "http://localhost:8080/convoys/mission/" + id;
            const response = await fetch(url, requestOptions);
            console.log(response);
            props.fetch("mission", "missionList")
        }
        catch (error)
        {
            console.error(error);
        }
    }

    // creaetes the list of available vehicles
    const listContent = props.vehicleList.map(vehicleObj =>
    {
        return <li key={vehicleObj.vehicleId} className="dropdown-item" onClick={() => addItem(vehicleObj.vehicleId)}> {vehicleObj.bumperNum} </li>
    })

    return (
        <tr onClick = {() => props.setCurrentMission(props.mission)}>
            <td style={{ width: "12%" }}>{props.mission.missionStatus ? "Complete" : "Incomplete"}</td>
            <td> {props.mission.name}</td>
            <td>{props.mission.bluf}</td>
            <td style={{ width: "33%" }}>
                <button
                    onClick={() => deleteItem(props.mission.missionId)}
                    className="btn btn-danger waves-effect mr-2"> Delete </button>
                <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Assign Vehicles
                    </button>
                <div className="dropdown-menu" position="relative">
                    {listContent}
                </div>
            </td>
        </tr>
    )
}

Mission.propTypes = {
    mission: PropTypes.object,
    fetch: PropTypes.func
}

export default Mission
