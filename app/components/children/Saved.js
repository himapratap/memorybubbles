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
                        <h2>
                            {element.title}
                        </h2>
                        <div>{renderHTML(element.data)}
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
                        <strong>{localStorage.name}'s Memory Bubbles
                        </strong>
                    </h1>
                    <nav>

                        <ul>

                            <li>
                                <Link to="/new">
                                    <button className="icon fa-plus-circle">Add a memory</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <footer id="footer" className="panel">
                    <div className="inner split">
                        <div>
                            <section>
                                <h2>My Social Media</h2>
                                <ul className="icons">
                                    <li>
                                        <a href="#" className="icon fa-twitter">
                                            <span className="label">Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon fa-facebook">
                                            <span className="label">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon fa-instagram">
                                            <span className="label">Instagram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon fa-github">
                                            <span className="label">GitHub</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon fa-dribbble">
                                            <span className="label">Dribbble</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon fa-linkedin">
                                            <span className="label">LinkedIn</span>
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div>
                            <section>
                                <h2>Add a memory to the cloud</h2>
                                <form method="post" action="#">
                                    <div className="field">
                                        <textarea name="message" id="message" rows="4" placeholder="Memory Entry"></textarea>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Upload a pic"/></li>
                                        <li><input type="reset" value="Clear"/></li>
                                        <li><input type="submit" value="Add" className="special"/></li>
                                    </ul>
                                </form>
                            </section>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Saved;
