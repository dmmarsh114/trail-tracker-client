import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            fetch('http://localhost:3000/user/login', {
                method: 'POST',
                body: JSON.stringify({ username: username, password: password }),
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then(response => response.json())
                .then(data => {
                    data.sessionToken ? props.updateToken(data.sessionToken)
                        : alert(`${data.error}: Username or password is incorrect`)
                })

        } else { alert('Please fill out all required fields') }
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label htmlFor='loginUsername'>Username:</Label>
                    <Input id='loginUsername' type='text' /*value={username}*/ onChange={e => setUsername(e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='loginPassword'>Password:</Label>
                    <Input id='loginPassword' type='password' /*value={password}*/ onChange={e => setPassword(e.target.value)}></Input>
                </FormGroup>
                <Button type='submit'>Login!</Button>
            </Form>
        </div>
    )
}

export default Login;