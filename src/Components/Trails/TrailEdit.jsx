import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const TrailEdit = (props) => {

    const [newTrailName, setNewTrailName] = useState(props.trailToEdit.name);
    const [newLocationCity, setNewLocationCity] = useState(props.trailToEdit.location.city);
    const [newLocationState, setNewLocationState] = useState(props.trailToEdit.location.state);
    const [newDifficulty, setNewDifficulty] = useState(props.trailToEdit.difficulty);
    const [newRating, setNewRating] = useState(props.trailToEdit.rating);
    const [newNotes, setNewNotes] = useState(props.trailToEdit.notes);

    const [warning, setWarning] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTrailName !== '' && newLocationCity !== '' && newLocationState !== '' && newLocationState !== 'State') {

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
            }).then(res => {
                setWarning(false);
                props.fetchTrails();
            })
                .then(props.toggleEditModal())
        }
        else {
            setWarning(true);
        }
    }


    const reqFieldWarning = () => {

        if (warning) {
            return (
                <p style={{ color: 'red', marginLeft: 20 }}> You must fill out all required fields!</p >
            )
        }
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader toggle={props.toggleEditModal}>Edit Your {props.trailToEdit.name} Log?</ModalHeader>
            {reqFieldWarning()}
            <Form onSubmit={e => handleSubmit(e)}>
                <ModalBody>
                    {/* TRAIL NAME */}
                    <FormGroup>
                        <Label htmlFor='trailName'>Trail Name: </Label>
                        <Input
                            id='trailName'
                            value={newTrailName}
                            onChange={e => setNewTrailName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='city'>Trail Location: </Label>
                        <Row>
                            {/* CITY LOCATION */}
                            <Col md='6'>
                                <Input
                                    id='city'
                                    placeholder='city'
                                    value={newLocationCity}
                                    onChange={e => setNewLocationCity(e.target.value)}
                                />
                            </Col>
                            {/* STATE LOCATION */}
                            <Col md='6'>
                                <Input
                                    placeholder='state'
                                    type='select'
                                    value={newLocationState}
                                    onChange={e => setNewLocationState(e.target.value)} >
                                    <option>State</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska</option>
                                    <option value="Nevada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Rhode Island">Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyoming">Wyoming</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Row>
                        <Col md='6'>
                            {/* TRAIL DIFFICULTY */}
                            <FormGroup>
                                <Label htmlFor='difficulty'>Difficulty: </Label>
                                <Input
                                    id='difficulty'
                                    type='select'
                                    value={newDifficulty}
                                    onChange={e => setNewDifficulty(e.target.value)}>
                                    <option value="easy">easy</option>
                                    <option value="moderate">moderate</option>
                                    <option value="moderately strenuous">moderately strenuous</option>
                                    <option value="strenuous">strenuous</option>
                                    <option value="very strenuous">very strenuous</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            {/* TRAIL RATING */}
                            <FormGroup>
                                <Label htmlFor='rating'>Rating: </Label>
                                <Input
                                    id='rating'
                                    type='select'
                                    value={newRating}
                                    onChange={e => setNewRating(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    {/* NOTES */}
                    <FormGroup>
                        <Label htmlFor='notes'>Notes: </Label>
                        <Input
                            id='notes'
                            type='textarea'
                            value={newNotes}
                            onChange={e => setNewNotes(e.target.value)}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' type='submit'>Submit</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

export default TrailEdit;