import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const TrailTable = (props) => {

    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return (
                <tr key={index}>
                    <td>{trail.name}</td>
                    <td>{trail.location.city}, {trail.location.state}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.rating}</td>
                    <td>{trail.notes}</td>
                    <td>
                        <Button onClick={() => { props.setTrailToEdit(trail); props.toggleEditModal() }} color='warning'>edit</Button>
                        <Button onClick={() => deleteTrail(trail)} color='danger'>delete</Button>
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