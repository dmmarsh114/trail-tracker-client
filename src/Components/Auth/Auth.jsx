import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import TrailIndex from '../Trails/TrailIndex';

import './auth.css';

const Auth = (props) => {

    const [haveAccount, setHaveAccount] = useState(true);

    const toggleHaveAccount = () => setHaveAccount(!haveAccount);

    return (
        <div className='auth' >
            {props.token === localStorage.getItem('token') ?
                <TrailIndex token={props.token} /> :
                <Container>
                    <Row>
                        <Col md='6'>
                            {!haveAccount ? <Signup updateToken={props.updateToken} /> : <Login updateToken={props.updateToken} />}
                            <Button id='toggleButton' onClick={toggleHaveAccount}>Don't have an account?</Button>
                        </Col>
                    </Row>
                </Container>}
        </div>
    )
}

export default Auth;