import React from 'react';
import { Table } from 'reactstrap';


const TrailTable = (props) => {

    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return (
                <tr key={index} onClick={e => editTrail(trail)}>
                    <td>{trail.name}</td>
                    <td>{trail.location.city}, {trail.location.state}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.rating}</td>
                    <td>{trail.notes}</td>
                </tr>
            )
        })
    }

    const editTrail = (trail) => {
        props.setTrailToEdit(trail);
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