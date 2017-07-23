//* **Main** - contains the main-container div that holds the main layout and navigation.\
// This component should also be able to hold sub-components Search and Saved

import React, {Component} from 'react';

import Home from './Home.js';
import Book from './children/Book';
import Saved from './children/Saved';
import Signin from './children/authentication/Signin';
import Signup from './children/authentication/Signup';

import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import helpers from './util/helpers';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    // The moment the page renders get the History
    componentDidMount() {}

    //saves the article in db
    saveUser(user) {
        console.log(" Save user called");
        console.log(event);
        helpers.saveUserInDB(user);
    }

    render() {
        return (
            <Router>
                <div id="wrapper">
                    <div id="main">

                        {/*Homepage
                        <Link to="/">
                        </Link>*/}

                        {/*Login*/}
                        <Link to="/login">
                            <button type="submit">
                                Login Page
                            </button>
                        </Link>

                        {/*Sign Up*/}
                        <Link to="/signup">
                            <button type="submit">
                                Signup Page
                            </button>
                        </Link>

                        {/*Profile Page (All Memories)*/}
                        <Link to="/saved">
                            <button type="submit">
                                All Memories
                            </button>
                        </Link>

                        {/*Add a new memory*/}
                        <Link to="/new">
                            <button type="submit">
                                New Memory
                            </button>
                        </Link>
                    </div>

                    {/*Component Routes*/}
                    <div>
                        {/*HomePage*/}
                        <Route exact path="/" component={() => <Home/>}/> {/*Login*/}
                        <Route exact path="/login" component={() => <Signin/>}/> {/*Sign Up */}
                        <Route exact path="/signup" component={() => <Signup saveUser={this.saveUser}/>}/> {/*All memories*/}
                        <Route exact path="/saved" component={() => <Saved/>}/> {/*New memory*/}
                        {/*<Route path="/new" component={() => <Book/>}/>*/}
                        <Route exact path="/new" component={() => <Book/>}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Main;
