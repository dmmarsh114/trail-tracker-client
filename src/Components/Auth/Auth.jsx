import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import TrailIndex from '../Trails/TrailIndex';

const Auth = (props) => {

    return (
        props.token === localStorage.getItem('token') ?
            <TrailIndex token={props.token} /> :
            <Container style={{ margin: 0 }}>
                <Row>
                    <Col md='6'>
                        <Signup updateToken={props.updateToken} />
                    </Col>
                    <Col md='6'>
                        <Login updateToken={props.updateToken} />
                    </Col>
                </Row>
            </Container>
    )
}

export default Auth;