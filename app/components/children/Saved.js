//* **Saved** - displays the Saved Articles that were searched and stored in the database
import React, {Component} from 'react';
import helpers from '../util/helpers'

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memories: []
        }
    }

    componentDidMount() {
        console.log("did mount");
    }

    componentWillMount() {
        console.log("will mount");
        helpers.getAllMemories().then(function(memories) {
            console.log(" will mount got memories");
            console.log(memories.data);
            this.setState({'memories': memories.data});

        }.bind(this));
    }

    render() {
        console.log("Memories in the render method:");
        console.log(this.state.memories);
        var resultsLength = this.state.memories.length;
        var resultSection;

        if (resultsLength == 0) {
            resultSection = (
                <div>
                    <h4>You have no memories yet</h4>
                </div>
            );
        } else {
            resultSection = (this.state.memories.map((element, x) => {
                return (
                    <article className="thumb" key={x}>
                        <a href="https://photos.smugmug.com/Photography/AP/i-gKH97th/0/6dd829be/X2/213%20DSC_2650HDR1aL77-X2.jpg" className="image"><img src="https://photos.smugmug.com/Photography/AP/i-gKH97th/0/6dd829be/X2/213%20DSC_2650HDR1aL77-X2.jpg" alt="" />
                        </a>
                        <h2>
                            {element.title}
                        </h2>
                        <p>
                            {element.data}
                        </p>
                        {/* <button className="btn btn-default button" data-article-index={x} onClick={this.props.deleteArticle.bind(this)}>Delete</button> */}
                    </article>
                )
            }))
        }

        return (
            <div id="wrapper">
            <div id="main">
                {resultSection}
            </div>
            </div>
        );
    }

}

export default Saved;
