import React, { useState } from 'react';
import { Button } from 'reactstrap';
import TrailInput from './TrailInput';

const TrailEdit = (props) => {

    const [trailName, setTrailName] = useState(props.trail.trailName);
    const [locationCity, setLocationCity] = useState(props.trail.locationCity);
    const [locationState, setLocationState] = useState(props.trail.locationState);
    const [difficulty, setDifficulty] = useState(props.trail.difficulty);
    const [rating, setRating] = useState(props.trail.rating);
    const [notes, setNotes] = useState(props.trail.notes);

    let modalHeader = 'Edit trail logs here!';

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/trails/update${props.trail.id}`, {
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
            {/* <Button onClick={props.toggleModal}>click here to update a trail log!</Button> */}
            <TrailInput
                modal={props.modal}
                setModal={props.setModal}
                toggleModal={props.toggleModal}
                modalHeader={modalHeader}
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
                setNotes={setNotes} />
        </div>
    );
};

export default TrailEdit;