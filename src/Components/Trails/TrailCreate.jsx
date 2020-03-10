import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const TrailCreate = () => {

    return (
        <div>
            <h2>create trails here!</h2>
            <Form>
                <FormGroup>
                    <Label>Trail Name: </Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Trail Location: </Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Difficulty: </Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Rating: </Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Notes: </Label>
                    <Input />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default TrailCreate;