import React, { useState } from 'react';
import { Button } from 'reactstrap';
import TrailInput from './TrailInput';

const TrailCreate = (props) => {

    const [trailName, setTrailName] = useState('');
    const [locationCity, setLocationCity] = useState('');
    const [locationState, setLocationState] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [rating, setRating] = useState(1);
    const [notes, setNotes] = useState('');

    let modalHeader = 'Create new trail logs here!';

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
        }).then(res => res.json())
            .then(trailData => {
                setTrailName('');
                setLocationCity('');
                setLocationState('');
                setDifficulty('');
                setRating(1);
                setNotes('');
                props.fetchTrails();
            })
    }

    return (
        <div style={{ textAlign: "center", margin: 20 }}>
            <Button onClick={props.toggleModal}>click here to log a new trail!</Button>
            <TrailInput
                modal={props.modal}
                setModal={props.setModal}
                toggleModal={props.toggleModal}
                modalHeader={modalHeader}
                handleSubmit={handleSubmit}
                setTrailName={setTrailName}
                setLocationCity={setLocationCity}
                setLocationState={setLocationState}
                setDifficulty={setDifficulty}
                setRating={setRating}
                setNotes={setNotes} />
        </div>
    );
}

export default TrailCreate;