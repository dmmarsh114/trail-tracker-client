import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import TrailEdit from './TrailEdit';


const TrailTable = (props) => {

    const [trail, setTrail] = useState();

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
        props.toggleModal();
        setTrail(trail);
    }

    return (
        <div>

            <TrailEdit trail={trail} modal={props.modal} toggleModal={props.toggleModal} fetchTrails={props.fetchTrails} token={props.token} />
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