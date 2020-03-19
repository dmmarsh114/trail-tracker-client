import React from 'react';
import { Table } from 'reactstrap';
import APIURL from '../../helpers/environment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { FormHelperText } from '@material-ui/core';

const TrailTable = (props) => {

    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return (
                <tr key={index}>
                    <td>{trail.name}</td>
                    <td>{trail.location.city}, {trail.location.state}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.rating}</td>
                    <td style={{ overflowY: 'scroll', maxWidth: 250, overflowWrap: 'normal' }}>{trail.notes}</td>
                    <td style={{ flexDirection: 'row' }}>
                        <EditIcon onClick={() => { props.setTrailToEdit(trail); props.toggleEditModal() }}>edit</EditIcon>
                        <DeleteIcon onClick={() => deleteTrail(trail)}>delete</DeleteIcon>
                    </td>
                </tr >
            )
        })
    }

    const deleteTrail = (trail) => {
        fetch(`${APIURL}/trails/delete/${trail.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchTrails())
    }

    return (
        <div>
            <Table hover striped bordered responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Difficulty</th>
                        <th>Rating</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {trailMapper(props.trails)}
                </tbody>
            </Table>
        </div>
    )
}

export default TrailTable;