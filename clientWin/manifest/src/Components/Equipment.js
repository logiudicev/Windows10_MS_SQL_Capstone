import React from 'react'
import PropTypes from 'prop-types'
import Badge from 'react-bootstrap'

const Equipment = props =>
{
    const soldierName = () =>
    {
        for (let soldier of props.soldierList)
        {
            if (soldier.soldierId === props.equip.soldierId)
            {
                return soldier.name;
            }
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
            const url = "http://localhost:8080/convoys/equipment/" + id;
            const response = await fetch(url, requestOptions);
            console.log(response);
            props.fetch("equipment", "equipmentList")
        }
        catch (error)
        {
            console.error(error);
        }
    }

    return (
        <tr>
            <td>{props.equip.name} </td>
            <td style={{ width: "12%" }}>{props.equip.weight}</td>
            <td style={{ width: "16%" }}>
                <h4><span className="badge badge-secondary">{soldierName()}</span></h4>
            </td>
            <td style={{ width: "16%" }}>
                <button
                    onClick={() => deleteItem(props.equip.equipmentId)}
                    className="btn btn-danger waves-effect"> Delete </button>

            </td>
        </tr>
    )
}

Equipment.propTypes = {
    equip: PropTypes.object,
    soldierList: PropTypes.array
}

export default Equipment



// TODO: pass fetcher function all the way down and then call it 

// async postMission()
//     {
//         try
//         {
//             const newMission = {
//                 "name": this.state.name,
//                 "missionStatus": this.state.missionStatus,
//                 "bluf": this.state.bluf
//             }

//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newMission)
//             };
//             // TODO add the correct URL
//             const url = "http://localhost:8080/convoys/mission";
//             const response = await fetch(url, requestOptions);
//             const json = await response.json();
//             console.log(json);
//         }
//         catch (error)
//         {
//             console.error(error);
//         }
//     }