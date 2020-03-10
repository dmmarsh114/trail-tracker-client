import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';


const TrailInput = (props) => {

    const [modal, setModal] = useState(false);

    // const [trailName, setTrailName] = useState('');
    // const [locationCity, setLocationCity] = useState('');
    // const [locationState, setLocationState] = useState('');
    // const [difficulty, setDifficulty] = useState('');
    // const [rating, setRating] = useState(1);
    // const [notes, setNotes] = useState('');

    const toggleModal = () => setModal(!modal)

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggleModal}>create trail logs here!</ModalHeader>
                <Form onSubmit={props.handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor='trailName'>Trail Name: </Label>
                            <Input
                                id='trailName'
                                onChange={e => props.setTrailName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='city'>Trail Location: </Label>
                            <Row>
                                <Col md='6'>
                                    <Input
                                        id='city'
                                        placeholder='city'
                                        onChange={e => props.setLocationCity(e.target.value)}
                                    />
                                </Col>
                                <Col md='6'>
                                    <Input
                                        placeholder='state'
                                        onChange={e => props.setLocationState(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col md='6'>
                                <FormGroup>
                                    <Label htmlFor='difficulty'>Difficulty: </Label>
                                    <Input
                                        id='difficulty'
                                        type='select'
                                        onChange={e => props.setDifficulty(e.target.value)}
                                    >
                                        <option value="easy">easy</option>
                                        <option value="moderate">moderate</option>
                                        <option value="moderately strenuous">moderately strenuous</option>
                                        <option value="strenuous">strenuous</option>
                                        <option value="very strenuous">very strenuous</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='6'>
                                <FormGroup>
                                    <Label htmlFor='rating'>Rating: </Label>
                                    <Input
                                        id='rating'
                                        type='select'
                                        onChange={e => props.setRating(e.target.value)}
                                    >
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
                        <FormGroup>
                            <Label htmlFor='notes'>Notes: </Label>
                            <Input id='notes' type='textarea' onChange={e => props.setNotes(e.target.value)} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='secondary' onClick={() => toggleModal()}>Cancel</Button>
                        <Button color='primary' onClick={() => toggleModal()} type='submit'>Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
}

export default TrailInput;