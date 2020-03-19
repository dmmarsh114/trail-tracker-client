import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';

import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        height: 220,
        marginTop: 30,
        textAlign: 'center',
        opacity: .8
    },
    header: {
        marginTop: 20,
        paddingBottom: 0
    },
});

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Wrapper = styled.div`
    display: block;
    margin: auto;
`;

const Landing = (props) => {

    const classes = useStyles();

    return (
        <div className='hero'>
            <div id='title'>
                <h2 className='landingTitle'>Welcome to Trail Tracker!</h2>
                {props.token === localStorage.getItem('token') ? <h5>you're logged in!</h5> : null}
            </div>
            <Row>
                <Wrapper>
                    <Link id='card' to='/alltrails'>
                        <Card className={classes.root} >
                            <CardActionArea>
                                <CardContent className={classes.header}>
                                    <PeopleAltIcon></PeopleAltIcon>
                                    <h5>Community</h5>
                                </CardContent>
                                <CardContent>
                                    <h6>See what trails your fellow hikers are tracking!</h6>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <Link id='card' to={props.token ? '/mytrails' : '/auth'}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent className={classes.header}>
                                    <NaturePeopleIcon></NaturePeopleIcon>
                                    <h5>My Trails</h5>
                                </CardContent>
                                <CardContent>
                                    <h6>Post your own favorite trails!</h6>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Wrapper>
            </Row>
        </div>
    );
}

export default Landing;