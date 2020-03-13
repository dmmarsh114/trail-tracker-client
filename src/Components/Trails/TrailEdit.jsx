import React, { useState } from 'react';
import TrailInput from './TrailInput';

const TrailEdit = (props) => {

    // let city = () => props.trailToEdit.location === undefined ? '' : props.trailToEdit.location.city
    // let state = () => props.trailToEdit.location === undefined ? '' : props.trailToEdit.location.state

    const [NewTrailName, setNewTrailName] = useState(props.trailToEdit.name);
    const [locationCity, setLocationCity] = useState(props.editCity);
    const [locationState, setLocationState] = useState(props.editState);
    const [difficulty, setDifficulty] = useState(props.trailToEdit.difficulty);
    const [rating, setRating] = useState(props.trailToEdit.rating);
    const [notes, setNotes] = useState(props.trailToEdit.notes);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/trails/update/${props.trailToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: NewTrailName,
                location: { city: locationCity, state: locationState },
                difficulty: difficulty,
                rating: rating,
                notes: notes
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

            NewTrailName={props.trailToEdit.name}
            setNewTrailName={setNewTrailName}
            locationCity={props.editCity}
            setLocationCity={setLocationCity}
            locationState={props.editState}
            setLocationState={setLocationState}
            difficulty={props.trailToEdit.difficulty}
            setDifficulty={setDifficulty}
            rating={props.trailToEdit.rating}
            setRating={setRating}
            notes={props.trailToEdit.notes}
            setNotes={setNotes}
        />
    );
}

export default TrailEdit;