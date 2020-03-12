import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import TrailTable from './TrailTable';
import TrailCreate from './TrailCreate';
import TrailEdit from './TrailEdit';

const TrailIndex = (props) => {

    const [trails, setTrails] = useState([]);

    const [trailToEdit, setTrailToEdit] = useState({});
    let editButtonDisabled = true;
    trailToEdit.name === undefined ? editButtonDisabled = true : editButtonDisabled = false;

    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const toggleCreateModal = () => setCreateModal(!createModal);
    const toggleEditModal = () => setEditModal(!editModal);

    const fetchTrails = () => {
        fetch('http://localhost:3000/trails/mytrails', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(res => res.json())
            .then(trailData => { setTrails(trailData) })
    }

    useEffect(() => {
        fetchTrails();
    }, [])

    return (
        <Container style={{ textAlign: 'center' }}>
            <Row>
                <Col md='1'></Col>
                <Col md='10'><h2>well howdy there, folks!</h2></Col>
                <Col md='1'></Col>
            </Row> <br />
            <Row>
                <Col md='1'></Col>
                <Col md='5'>
                    <Button onClick={toggleCreateModal}>Create</Button>
                    <TrailCreate
                        createModal={createModal}
                        toggleCreateModal={toggleCreateModal}
                        fetchTrails={fetchTrails}
                        token={props.token} />
                </Col>
                <Col md='5'>
                    <Button
                        disabled={editButtonDisabled}
                        onClick={toggleEditModal}>
                        {editButtonDisabled ? 'click a trail log to edit it!' : `edit ${trailToEdit.name}?`}
                    </Button>
                    <TrailEdit
                        editModal={editModal}
                        toggleEditModal={toggleEditModal}
                        trailToEdit={trailToEdit}
                        token={props.token} />
                </Col>
                <Col md='1'></Col>
            </Row> <br />
            <Row>
                <Col md='1'></Col>
                <Col md='10'>
                    <TrailTable trails={trails} setTrailToEdit={setTrailToEdit} fetchTrails={fetchTrails} token={props.token} />
                </Col>
                <Col md='1'></Col>
            </Row>

        </Container >
    )
}

export default TrailIndex;