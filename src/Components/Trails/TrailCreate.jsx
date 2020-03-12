import React, { useState } from 'react';
import TrailInput from './TrailInput';

const TrailCreate = (props) => {

    console.log(`CREATE PROPS: `, props)

    const [trailName, setTrailName] = useState('');
    const [locationCity, setLocationCity] = useState('');
    const [locationState, setLocationState] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [rating, setRating] = useState(1);
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/trails/newlog', {
            method: 'POST',
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
        })
            .then(res => res.json())
            .then(trailData => {
                setTrailName('');
                setLocationCity('');
                setLocationState('');
                setDifficulty('');
                setRating(1);
                setNotes('');
                props.fetchTrails();
            })
            .then(console.log('FETCH'))
    }

    return (

        <TrailInput
            modal={props.createModal}
            toggle={props.toggleCreateModal}
            modalTitle={'Create New'}

            handleSubmit={handleSubmit}

            trailName={trailName}
            setTrailName={setTrailName}
            locationCity={locationCity}
            setLocationCity={setLocationCity}
            locationState={locationState}
            setLocationState={setLocationState}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            rating={rating}
            setRating={setRating}
            notes={notes}
            setNotes={setNotes}
        />
    );
}

export default TrailCreate;