import React, { useState, useEffect } from 'react';
import { Input, Button, ButtonGroup, Table } from 'reactstrap';
import APIURL from '../../helpers/environment';


const AllTrails = (props) => {

    const [allTrails, setAllTrails] = useState([]);
    const [displayedTrails, setDisplayedTrails] = useState([]);

    const [cSelected, setCSelected] = useState([]);
    const [stateFilter, setStateFilter] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState('easy');
    const [ratingFilter, setRatingFilter] = useState(1);


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
                setAllTrails(trailData);
                setDisplayedTrails(trailData);
            })
    }

    useEffect(() => {
        fetchAllTrails();
    }, [])

    const trailDisplay = () => {
        if (displayedTrails.length > 0) {
            return displayedTrails.map((trail, index) => {
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
        } else {
            return (
                <tr>
                    <td>nothing to see here...</td>
                </tr>
            )
        }
    }

    // this is reactstrap code that allows you to select multiple filters
    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const filterTrailsByState = (state) => {
        let filteredTrails = displayedTrails.filter(trail => trail.location.state === state);
        setDisplayedTrails(filteredTrails);
    }

    const filterTrailsByDifficulty = (difficulty) => {
        let filteredTrails = displayedTrails.filter(trail => trail.difficulty === difficulty);
        setDisplayedTrails(filteredTrails);
    }

    const filterTrailsByRating = (rating) => {
        let filteredTrails = displayedTrails.filter(trail => trail.rating >= rating);
        setDisplayedTrails(filteredTrails);
    }

    const clearFilter = () => {
        setDisplayedTrails(allTrails);
        setCSelected([]);
    }

    return (
        <div>
            <h5>what kind of trails are you looking for, partner?</h5>
            <ButtonGroup>
                <Input type='select' value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
                    <option>State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </Input>
                <Button color="primary" onClick={() => { onCheckboxBtnClick(1); filterTrailsByState(stateFilter) }} active={cSelected.includes(1)}>State</Button>

                <Input type='select' value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="moderately strenuous">moderately strenuous</option>
                    <option value="strenuous">strenuous</option>
                    <option value="very strenuous">very strenuous</option>
                </Input>
                <Button color="primary" onClick={() => { onCheckboxBtnClick(2); filterTrailsByDifficulty(difficultyFilter) }} active={cSelected.includes(2)}>Difficulty</Button>

                <Input type='select' value={ratingFilter} onChange={e => setRatingFilter(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </Input>
                <Button color="primary" onClick={() => { onCheckboxBtnClick(3); filterTrailsByRating(ratingFilter) }} active={cSelected.includes(3)}>Rating</Button>
            </ButtonGroup>
            <Button onClick={() => clearFilter()}>clear filters</Button>

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
                    {trailDisplay()}
                </tbody>
            </Table>
        </div >
    )
}

export default AllTrails;