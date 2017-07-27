//* **Saved** - displays the Saved Articles that were searched and stored in the database
import React, {Component} from 'react';
import helpers from '../util/helpers'
import renderHTML from 'react-render-html';
import {Link} from 'react-router-dom';
class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memories: []
        }
    }

    componentWillMount() {
        helpers.getAllMemories().then(function(memories) {
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
                <div className="container">
                    <div id="noMemCenter">
                        <h1>You have no memories yet!</h1>
                        <h2>Click the add memory button below to start building your stack.</h2>
                    </div>
                </div>
            );
        } else {
            resultSection = (this.state.memories.map((element, x) => {
                return (
                    <article className="thumb" key={x}>
                        <h2>
                            {element.title}
                        </h2>
                        <div id="memcontentpad">{renderHTML(element.data)}
                        </div>
                    </article>
                )
            }))
        }

        return (
            <div id="wrapper">
                <div id="main">
                    {resultSection}
                </div>
                <header id="header">
                    <h1>
                        <strong>{localStorage.name}'s
                        </strong>
                    </h1>
                    <h1 id="profilelogo">memorystack</h1>
                    <nav>

                        <ul>

                            <li>
                                <Link to="/new">
                                    <button className="icon fa-plus special">Add a memory</button>
                                </Link>
                                <Link to="/">
                                    <a className="icon fa-minus ">Logout</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }

}

export default Saved;
