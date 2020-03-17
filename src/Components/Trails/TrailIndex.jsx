import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

import TrailTable from './TrailTable';
import TrailCreate from './TrailCreate';
import TrailEdit from './TrailEdit';

const TrailIndex = (props) => {

    const [trails, setTrails] = useState([]);

    const [createModal, setCreateModal] = useState(false);
    const toggleCreateModal = () => setCreateModal(!createModal);

    const [trailToEdit, setTrailToEdit] = useState({});
    const [editModalActive, setEditModalActive] = useState(false);
    const toggleEditModal = () => setEditModalActive(!editModalActive);

    const fetchTrails = () => {
        fetch(`${APIURL}/trails/mytrails`, {
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
                <Col md='10'><h2>well howdy there!</h2></Col>
                <Col md='1'></Col>
            </Row>
            <Row>
                <Col md='1'></Col>
                <Col md='10'><h5>these are your trails!</h5></Col>
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
                    <TrailTable
                        trails={trails}
                        fetchTrails={fetchTrails}
                        setTrailToEdit={setTrailToEdit}
                        toggleEditModal={toggleEditModal}
                        token={props.token}
                    />
                </Col>
                <Col md='1'></Col>
            </Row>
            {editModalActive ?
                <TrailEdit
                    trailToEdit={trailToEdit}
                    toggleEditModal={toggleEditModal}
                    fetchTrails={fetchTrails}
                    token={props.token}
                /> : null}
        </Container >
    )
}

export default TrailIndex;