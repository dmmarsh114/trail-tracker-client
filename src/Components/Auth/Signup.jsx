import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signup = (event) => {
        event.preventDefault();

        if (username && password) {
            fetch(`${APIURL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify({ username: username, password: password }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(response => response.json())
                .then(data => data.sessionToken ? props.updateToken(data.sessionToken)
                    : alert(data.errors[0].message))

        } else { alert('Please fill out all required fields') }

    }

    return (
        <div>
            <h2>Signup</h2>
            <Form onSubmit={signup}>
                <FormGroup>
                    <Label htmlFor='username'>Username:</Label>
                    <Input id='username' type='text' /*value={username}*/ onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password:</Label>
                    <Input id='password' type='password' /*value={password}*/ onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button type='submit'>Signup!</Button>
            </Form>
        </div >
    )
}

export default Signup;