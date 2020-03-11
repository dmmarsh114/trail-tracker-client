import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import TrailCreate from './TrailCreate';
import TrailTable from './TrailTable';
import TrailEdit from './TrailEdit';

const TrailIndex = (props) => {

    const [trails, setTrails] = useState([]);
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal)

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
        <Container>
            <div style={{ textAlign: "center", margin: 20 }}>
                <h2>well howdy there, folks!</h2>
            </div>
            <TrailCreate modal={modal} toggleModal={toggleModal} fetchTrails={fetchTrails} token={props.token} />
            <Row>
                <Col md='1'></Col>
                <Col md='10'>
                    <TrailTable trails={trails}
                        modal={modal} toggleModal={toggleModal} fetchTrails={fetchTrails} token={props.token} />
                </Col>
                <Col md='1'></Col>
            </Row>

        </Container >
    )
}

export default TrailIndex;