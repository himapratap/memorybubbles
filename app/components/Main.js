//* **Main** - contains the main-container div that holds the main layout and navigation.\
// This component should also be able to hold sub-components Search and Saved

import React, {Component} from 'react';
import Book from './children/Book';
import Saved from './children/Saved';
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

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="jumbotron jumbo text-center">
                        <Link to="/">

                            <h1>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                Memory Bubbles !!</h1>
                        </Link>
                        <Link to="/saved">
                            <button type="submit" className="btn btn-default ">
                                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                                All memories</button>
                        </Link>
                        <Link to="/new">
                            <button type="submit" className="btn btn-default ">
                                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                                Add new memory</button>
                        </Link>
                    </div>

                    <div className="row">
                        {/* <Route exact path="/" component={() => <Book updateSavedArticles={this.updateSavedArticles}/>}></Route> */}
                        <Route exact path="/" component={() => <Book/>}/>

                        <Route path="/new" component={() => <Book/>}/>
                    </div>
                    <div className="row">
                        {/* <Route path="/saved" component={() => <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>}></Route> */}
                    </div>
                </div>
            </Router>
        )
    }
}
export default Main;
