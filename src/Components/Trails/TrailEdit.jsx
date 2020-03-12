import React, { useState, useEffect } from 'react';
import TrailInput from './TrailInput';

const TrailEdit = (props) => {

    const [trailName, setTrailName] = useState('');
    const [locationCity, setLocationCity] = useState('');
    const [locationState, setLocationState] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [rating, setRating] = useState('');
    const [notes, setNotes] = useState('');

    // useEffect(() => {

    // }, [])

    console.log('CREATE PROPS:', props);
    console.log(props.trailToEdit);
    props.trailToEdit.location == undefined ? console.log('nothing here') : console.log(props.trailToEdit.location.city);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/trails/update/${props.trailToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: trailName,
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

            trailName={props.trailToEdit.name}
            setTrailName={setTrailName}
            locationCity={props.trailToEdit.location}
            setLocationCity={setLocationCity}
            locationState={props.trailToEdit.location}
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