//Include React
import React from 'react';
// import Memories from './memory/Memories';
// import MemoryPage from './memory/MemoryPage';
import helpers from './util/helpers';
import HomeDes from './HomeDes.js'

class TestBG extends React.Component {
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
                    
                </div>

                <HomeDes/>
            </div>
            


        )
    }
};

export default TestBG;


