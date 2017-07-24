//* **Search** - queries the NYT API for articles.
//Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.
//Include React
import React from 'react';
import Memories from './memory/Memories';
import MemoryPage from './memory/MemoryPage';
import helpers from '../util/helpers';
//Search component is used to take input from user to search the NYTimes api and show the results
class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: {},
            results: []
        }
      //  this.changeSearchQuery = this.changeSearchQuery.bind(this);
         this.saveMemory = this.saveMemory.bind(this);
    //    this.removeArticle = this.removeArticle.bind(this);
        console.log(`constructor called`);
    }

    changeSearchQuery(searchQuery) {
        console.log(`Search component : ${searchQuery}`);
        console.log(searchQuery);
        this.setState({searchQuery: searchQuery})
    }

    //saves the article in db
    saveMemory(memory) {
        console.log(" Save memory called");
        console.log(memory);
        console.log(event);
        // var articleIndex = event.target.dataset.articleIndex;
        // let {
        //     headline: {
        //         main: title
        //     },
        //     pub_date: date,
        //     web_url: url
        // } = this.state.results[articleIndex];
        // var article = {
        //     title,
        //     date,
        //     url
        // }
        //
        helpers.saveMemoryInDB(memory);
        // console.log(`article : ${article}`);
        // this.removeArticle(articleIndex);
        //this.props.updateSavedArticles(article);
    }

    removeArticle(articleIndex) {
        // this.state.results.splice(articleIndex, 1);
        // this.setState({results: this.state.results});
        // console.log(`Removed the article from results in state : ${this.state.results.length}`);
    }


    // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
    // props or state
    componentDidUpdate(prevProps, prevState) {
        console.log(`updating components`);
        // if (prevState.searchQuery != this.state.searchQuery) {
        //     console.log("COmponent updated");
        //     helpers.searchArticles(this.state.searchQuery).then(function(results) {
        //         console.log('Search results', results);
        //         this.setState({results: results})
        //
        //     }.bind(this));
        // }

        // if (this.state.results == null && prevState.results != null) {
        //     console.log(`prev results not null`);
        //     this.setState({results: prevState.results})
        //
        // }
    }

    render() {
        return (
            <div>
                <div>
                    <MemoryPage saveMemory={this.saveMemory}/>
                </div>

                <div>
                    <Memories/>
                </div>
            </div>
        )
    }
}

export default Book;
