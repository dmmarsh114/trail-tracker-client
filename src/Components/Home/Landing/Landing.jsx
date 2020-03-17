import React from 'react';
import './Landing.css';
import landingPic from '../../../assets/whiteRiver.jpg';
const altText = "There should be a picture here. If you can read this, then you're missing out!";

const Landing = (props) => {


    return (
        <div className='hero'>
            <h3 className='landingTitle'>This is the Landing page</h3>
            {props.token === localStorage.getItem('token') ? <p>you're logged in!</p> : null}
            <img className='image' src={landingPic} alt={altText}></img>
        </div>
    );
}

export default Landing;