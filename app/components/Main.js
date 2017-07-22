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
        // this.state = {
        //     savedArticles: ''
        // }
        // this.updateSavedArticles = this.updateSavedArticles.bind(this);
        // this.deleteArticle = this.deleteArticle.bind(this);
    }
    // The moment the page renders get the History
    componentDidMount() {
        // Get the latest history.
        // console.log('getting saved articles');
        // helpers.getSavedArticles().then(function(response) {
        //     console.log(response);
        //     if (response !== this.state.savedArticles) {
        //         console.log("savedArticles", response.data);
        //         this.setState({savedArticles: response.data});
        //     }
        // }.bind(this));
    }

    updateSavedArticles(newArticle) {
        // console.log('Updating saved articles array in state');
        // var savedArticles = this.state.savedArticles.slice();
        // savedArticles.push(newArticle)
        //
        // this.setState({savedArticles: savedArticles});
        // console.log('Updated saved articles array in state');

    }

    deleteArticle(index) {
        // console.log(`Deleting item from the saved list ${index}`);
        // var array = this.state.savedArticles;
        // var itemToBeDeleted = array.splice(index, 1);
        //
        // helpers.deleteArticle(itemToBeDeleted[0]._id).then(() => {
        //     console.log(`Deleted item from the saved with id `);
        //     console.log('SLiced array');
        //     console.log(array);
        //
        //     this.setState({savedArticles: array});
        //     console.log('AFter slice on delete');
        //     console.log(this.state.savedArticles);
        // });

    }

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
                       <Route exact path="/" component={() => <Home/>}/>

                        {/*Login*/}
                        <Route exact path="/login" component={() => <Signin/>}/> 

                        {/*Sign Up */}
                        <Route exact path="/signup" component={() => <Signup saveUser={this.saveUser}/>}/>

                        {/*All memories*/} 
                        <Route exact path="/saved" component={() => <Saved/>}/>

                        {/*New memory*/} 
                        {/*<Route path="/new" component={() => <Book/>}/>*/} 
                        <Route exact path="/new" component={() => <Book/>}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Main;
