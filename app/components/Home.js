//Include React
import React from 'react';
import {Link,Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
// import Memories from './memory/Memories';
// import MemoryPage from './memory/MemoryPage';
import helpers from './util/helpers';
import './home.scss'

class Home extends React.Component {
    constructor (props) {
        super(props);
        localStorage.clear();
        console.log('clearing local storage and reloading home');
        this.state = {
            videoURL: '/assets/videos/Workaholic.mp4',
            picURL: '/assets/videos/Workaholic.jpg',
            videoWebURL: '/assets/videos/Workaholic.webm'
        }
    }

    render () {
       console.log('rerendering');
        return (
            <div className="homepage-hero-module">
                <div className="video-container">
                    {/*<div className="filter"></div>*/}
                    <video loop autoPlay className="fillWidth">
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoWebURL} type="video/webm" />
                    </video>
                        <Link to="/login">
                    <div id="polina">
                        <h1 id="logo">MemorySTACK</h1>
                        <h1>A responsive digital diary</h1>
                        <h3>Track your memories.</h3>
                        <h3>Upload photos.</h3>
                        <h3>All on your private digital space.</h3>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Home;

{/*<p>Write statuses, upload images, decorate with emojis.</p>
                        <p>All in your own private digital space.</p>
                        <p>Share the information you want to share!</p>*/}

{/*<button type="submit" className="special">Get Started</button>*/}
