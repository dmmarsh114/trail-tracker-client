import React, { useState, useEffect } from 'react';
import { Input, Button, Table } from 'reactstrap';
import APIURL from '../../helpers/environment';


const AllTrails = (props) => {

    // const [allTrails, setAllTrails] = useState([]);
    // const [sortParams, setSortParams] = useState('');
    let sortedTrails;
    const [trailsToDisplay, setTrailsToDisplay] = useState([]);

    const fetchAllTrails = () => {
        fetch(`${APIURL}/trails/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(res => res.json())
            .then(trailData => {
                setTrailsToDisplay(trailData)
                sortedTrailMapper(trailData)
            })
    }

    useEffect(() => {
        fetchAllTrails();
    }, [])

    const filterTrails = (params) => {
        // sortedTrails = allTrails.filter(trail => `${trail}.${params}`);
        sortedTrails = trailsToDisplay.filter(trail => trail.location.state === 'Indiana');
        setTrailsToDisplay(sortedTrails);
        console.log('SORTED', sortedTrails);
    }

    const sortedTrailMapper = (trailData) => {
        return trailData.map((trail, index) => {
            return (
                <tr key={index}>
                    <td>{trail.name}</td>
                    <td>{trail.location.city}, {trail.location.state}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.rating}</td>
                    <td>{trail.notes}</td>
                    <td>{trail.userId}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <h5>what kind of trails are you looking for, partner?</h5>
            {/* <Input type='select' onChange={e => setSortParams(e.target.value)}>
                <option value="state">State</option>
                <option value="difficulty">Difficulty</option>
                <option value="rating">Rating</option>
            </Input>
            <Button onClick={() => filterTrails(sortParams)}>find me trails!</Button> */}
            <Button onClick={filterTrails}>click me daddy</Button>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Difficulty</th>
                        <th>Rating</th>
                        <th>Notes</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTrailMapper()}
                </tbody>
            </Table>
        </div >
    )
}

export default AllTrails;