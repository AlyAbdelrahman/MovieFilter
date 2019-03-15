import React from 'react';
// import { Link } from 'react-router-dom';

const Home = props => {
    return (<>
        <h1>home page</h1>
        <video width="1280" height="720" className="background" autoPlay muted loop>
  <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4"/>
</video>
    </>);
};


export default Home;
