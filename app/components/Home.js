//Include React
import React from 'react';
// import Memories from './memory/Memories';
// import MemoryPage from './memory/MemoryPage';
import helpers from './util/helpers';
//Search component is used to take input from user to search the NYTimes api and show the results
class Home extends React.Component {

    render() {
        return (
            <video poster="./../../assets/videos/bg.jpg" id="bgvid" playsinline autoplay muted loop>
                <source src="./../../assets/videos/video.webm" type="video/webm"/>
                <source src="./../../assets/videos/video.mp4" type="video/mp4"/>
            </video>

            
        )
    }
}

export default Home;
