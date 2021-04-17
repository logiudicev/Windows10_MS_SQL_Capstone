import React from 'react'
import PropTypes from 'prop-types'

const Soldier = props => 
{
    const vehicleName = () => {
        for (let vehicle of props.vehicleList)
        {
            if (vehicle.vehicleId === props.soldier.vehicleId)
            {
                return vehicle.type; 
            }
        }
    }

    async function addItem(id)
    {
        try
        {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.soldier)
            };
            // TODO add the correct URL
            const url = "http://localhost:8080/convoys/equipment/add/" + id;
            const response = await fetch(url, requestOptions);
            const json = await response.json(); 
            console.log(json);
            props.fetch("equipment", "equipmentList") // refreshes our equip
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
            const url = "http://localhost:8080/convoys/soldier/" + id;
            const response = await fetch(url, requestOptions);
            console.log(response);
            props.fetch("soldier", "soldierList")
        }
        catch (error)
        {
            console.error(error);
        }
    }

    const listContent = props.equipmentList.map(equipObj =>
    {
        return <li className = "dropdown-item" key = {equipObj.equipmentId} onClick={() => addItem(equipObj.equipmentId)}> {equipObj.name} </li>
    })

    return (
        < tr >
            <td style={{width: "12%"}}>{props.soldier.ranks} </td>
            <td>{props.soldier.name}</td>
            <td>{props.soldier.role}</td>
            <td style={{ width: "16%" }}>
                <h4><span className="badge badge-secondary">{vehicleName()}</span></h4>
            </td>
            <td style={{width: "33%"}}>
                <button
                    onClick={() => deleteItem(props.soldier.soldierId)}
                    className="btn btn-danger waves-effect mr-2"> Delete </button>

                    <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                        Issue Equipment
                    </button>
                    <div className="dropdown-menu" position = "relative">
                        {listContent}
                    </div>

            </td>
        </tr >
    )
}

Soldier.propTypes = {
    soldier: PropTypes.object,
    equipmentList: PropTypes.array,
    vehicleList: PropTypes.array,
}

export default Soldier
