import React, { useState } from 'react';
import { Button } from 'reactstrap';
import TrailInput from './TrailInput';

const TrailCreate = (props) => {

    const [modal, setModal] = useState(false);

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

    const toggleModal = () => setModal(!modal)

    return (
        <div style={{ textAlign: "center", margin: 20 }}>
            <Button onClick={() => toggleModal()}>click here to log a new trail!</Button>
            {
                modal ?
                    <TrailInput
                        modal={modal}
                        handleSubmit={handleSubmit}
                        setTrailName={setTrailName}
                        setLocationCity={setLocationCity}
                        setLocationState={setLocationState}
                        setDifficulty={setDifficulty}
                        setRating={setRating}
                        setNotes={setNotes}
                    /> : null
            }
        </div>
    );
}

export default TrailCreate;