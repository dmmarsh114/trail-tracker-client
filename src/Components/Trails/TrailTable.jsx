import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import TrailEdit from './TrailEdit';

const TrailTable = (props) => {

    const [trailToEdit, setTrailToEdit] = useState({});
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);

    const [editCity, setEditCity] = useState('');
    const [editState, setEditState] = useState('');

    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return (
                <tr key={index} onClick={e => editTrail(trail)}>
                    <td>{trail.name}</td>
                    <td>{trail.location.city}, {trail.location.state}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.rating}</td>
                    <td>{trail.notes}</td>
                    <td><Button onClick={() => deleteTrail(trail)} color='danger'>delete</Button></td>
                </tr>
            )
        })
    }

    const editTrail = (trail) => {
        setTrailToEdit(trail);
        setEditCity(trail.location.city);
        setEditState(trail.location.state);
        toggleEditModal();

        // return (
        //     <TrailEdit
        //         trailToEdit={trailToEdit}
        //         editModal={editModal}
        //         toggleEditModal={toggleEditModal}
        //         token={props.token}
        //     />
        // )

    }

    const deleteTrail = (trail) => {
        fetch(`http://localhost:3000/trails/delete/${trail.id}`, {
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
            <TrailEdit
                trailToEdit={trailToEdit}
                editModal={editModal}
                toggleEditModal={toggleEditModal}
                fetchTrails={props.fetchTrails}
                token={props.token}

                editCity={editCity}
                editState={editState}
            />
        </div>
    )
}

export default TrailTable;