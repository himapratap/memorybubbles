//Include React
import React from 'react';
import {Link,Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
// import Memories from './memory/Memories';
// import MemoryPage from './memory/MemoryPage';
import helpers from './util/helpers';


class Home extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '/assets/videos/Workaholic.mp4',
            picURL: '/assets/videos/Workaholic.jpg',
            videoWebURL: '/assets/videos/Workaholic.webm'
        }
    }

    render () {
        return (
            <div className="homepage-hero-module">
                <div className="video-container">
                    <div className="filter"></div>
                    <video loop autoPlay className="fillWidth">
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoWebURL} type="video/webm" />
                    </video>
                    <div id="polina">
                        <Link to="/login">
                        <h1 id="logo">MemorySTACK</h1>
                        </Link>
                    </div>
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
