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
                        <h1>The Name of The Project</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>
                                <p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>
                             
                                        <Link className="mid-button" to="/login">
                                            <button type="submit">
                                                Get Started
                                            </button>
                                        </Link>

                                                     
                              
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;

