import React, { useState } from 'react';
import TrailInput from './TrailInput';

const TrailEdit = (props) => {


    const [newTrailName, setNewTrailName] = useState(props.trailToEdit.name);
    const [newLocationCity, setNewLocationCity] = useState(props.editCity);
    const [newLocationState, setNewLocationState] = useState(props.editState);
    const [newDifficulty, setNewDifficulty] = useState(props.trailToEdit.difficulty);
    const [newRating, setNewRating] = useState(props.trailToEdit.rating);
    const [newNotes, setNewNotes] = useState(props.trailToEdit.notes);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/trails/update/${props.trailToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: newTrailName,
                location: { city: newLocationCity, state: newLocationState },
                difficulty: newDifficulty,
                rating: newRating,
                notes: newNotes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => props.fetchTrails())
    }

    return (

        <TrailInput
            modal={props.editModal}
            toggle={props.toggleEditModal}
            modalTitle={props.trailToEdit.name}

            handleSubmit={handleSubmit}

            newTrailName={props.trailToEdit.name}
            setNewTrailName={setNewTrailName}
            newLocationCity={props.editCity}
            setNewLocationCity={setNewLocationCity}
            newLocationState={props.editState}
            setNewLocationState={setNewLocationState}
            difficulty={props.trailToEdit.difficulty}
            setDifficulty={setNewDifficulty}
            rating={props.trailToEdit.rating}
            setRating={setNewRating}
            notes={props.trailToEdit.notes}
            setNotes={setNewNotes}
        />
    );
}

export default TrailEdit;