import React, { useState, useEffect } from 'react';
import { Input, Button, Table, Form, FormGroup, Label } from 'reactstrap';

import './AllTrails.css';
import Checkbox from '@material-ui/core/Checkbox';

import APIURL from '../../../helpers/environment';


const AllTrails = (props) => {

    const [allTrails, setAllTrails] = useState([]);
    const [displayedTrails, setDisplayedTrails] = useState([]);

    const [stateFiltering, setStateFiltering] = useState(false);
    const [stateFilter, setStateFilter] = useState('Alabama');

    const [difficultyFiltering, setDifficultyFiltering] = useState(false);
    const [difficultyFilter, setDifficultyFilter] = useState('easy');


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

    const clearFilters = () => {
        setStateFiltering(false);
        setStateFilter('Alabama');

        setDifficultyFiltering(false);
        setDifficultyFilter('easy');

        setDisplayedTrails(allTrails);
    }

    const filteredSearch = (e) => {
        e.preventDefault();

        let filteredTrails;

        if (stateFiltering && difficultyFiltering) {
            filteredTrails = displayedTrails.filter(trail => trail.location.state === stateFilter && trail.difficulty === difficultyFilter);
        } else if (stateFiltering) {
            filteredTrails = displayedTrails.filter(trail => trail.location.state === stateFilter);
        } else if (difficultyFiltering) {
            filteredTrails = displayedTrails.filter(trail => trail.difficulty === difficultyFilter);
        } else {
            console.log('no filters specified');
            return;
        }

        setDisplayedTrails(filteredTrails);
    }

    return (
        <div>

            <Form className='searchForm' onSubmit={e => filteredSearch(e)}>
                <h4>trails posted by your fellow trackers!</h4>
                <h6>filter trails by...</h6>

                <FormGroup>
                    <Checkbox color='default' id='stateCheckbox' value={stateFiltering} checked={stateFiltering} onChange={() => setStateFiltering(!stateFiltering)}></Checkbox>
                    {
                        !stateFiltering ? <Label for='stateCheckbox'>State</Label>
                            : <Input id='filterInput' type='select' value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
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
                    }
                </FormGroup>

                <FormGroup>
                    <Checkbox color='default' id='difficultyCheckbox' value={difficultyFiltering} checked={difficultyFiltering} onChange={() => setDifficultyFiltering(!difficultyFiltering)}></Checkbox>
                    {
                        !difficultyFiltering ? <Label for='difficultyCheckbox'>Difficulty</Label>
                            : <Input id='filterInput' type='select' type='select' value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="moderately strenuous">moderately strenuous</option>
                                <option value="strenuous">strenuous</option>
                                <option value="very strenuous">very strenuous</option>
                            </Input>
                    }
                </FormGroup>

                <Button id='searchButton' type='submit'>search with these filters</Button>
                <Button id='searchButton' onClick={clearFilters}>clear filters</Button>
            </Form>

            <Table id='allTrailsTable' hover striped bordered responsive>
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