import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import TrailTable from './TrailTable';
import TrailCreate from './TrailCreate';

const TrailIndex = (props) => {

    const [trails, setTrails] = useState([]);

    const [createModal, setCreateModal] = useState(false);
    const toggleCreateModal = () => setCreateModal(!createModal);

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
                <Col md='10'>
                    <Button onClick={toggleCreateModal}>Create</Button>
                    <TrailCreate
                        createModal={createModal}
                        toggleCreateModal={toggleCreateModal}
                        fetchTrails={fetchTrails}
                        token={props.token} />
                </Col>
                <Col md='1'></Col>

            </Row> <br />
            <Row>
                <Col md='1'></Col>
                <Col md='10'>
                    <TrailTable trails={trails} fetchTrails={fetchTrails} token={props.token} />
                </Col>
                <Col md='1'></Col>
            </Row>

        </Container >
    )
}

export default TrailIndex;