import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import TrailCreate from './TrailCreate';
import TrailTable from './TrailTable';

const TrailIndex = (props) => {

    const [trails, setTrails] = useState([]);
    const [trailCreate, setTrailCreate] = useState(false);

    const fetchTrails = () => {

        fetch('http://localhost:3000/trails/all', {
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
        <Container>
            <div style={{ textAlign: "center", margin: 20 }}>
                <h2>well howdy there, folks!</h2>
                <Button onClick={() => setTrailCreate(!trailCreate)}>Click here to add a trail!</Button>
            </div>
            <Row>
                <Col md='1'></Col>
                <Col md='10'>
                    {trailCreate ? <TrailCreate /> : null}
                </Col>
                <Col md='1'></Col>
            </Row>
            <Row>
                <Col md='1'></Col>
                <Col md='10'>
                    <TrailTable trails={trails} />
                </Col>
                <Col md='1'></Col>
            </Row>

        </Container>
    )
}

export default TrailIndex;