//* **Main** - contains the main-container div that holds the main layout and navigation.\
// This component should also be able to hold sub-components Search and Saved

import React, {Component} from 'react';

import Home from './Home.js';
import Book from './children/Book';
import Saved from './children/Saved';
import Login from './children/authentication/Login';
import Signup from './children/authentication/Signup';

import {Link,Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
import { browserHistory } from 'react-router'

import helpers from './util/helpers';

class Main extends Component {
    constructor(props) {
        super(props);
       }

    // The moment the page renders get the History
    componentDidMount() {}

    render() {
        return (
            <Router>
                    {/*Component Routes*/}
                    <div>
                        {/*HomePage*/}
                        <Route exact path="/" component={() => <Home/>}/> {/*Login*/}
                        <Route exact path="/login" component={() => <Login/>}/> {/*Sign Up */}
                        <Route exact path="/signup" component={() => <Signup/>}/> {/*All memories*/}
                        <Route exact path="/saved" component={() => <Saved/>}/>
                        <Route exact path="/new" component={() => <Book/>}></Route>
                        

                        
                    </div>
             </Router>
        )
    }

}

export default Main;
