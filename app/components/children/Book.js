//* **Search** - queries the NYT API for articles.
//Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.
//Include React
import React from 'react';
import MemoryPage from './memory/MemoryPage';
import helpers from '../util/helpers';

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: {},
            results: []
        }
        this.saveMemory = this.saveMemory.bind(this);
        console.log(`Book constructor called`);
    }

    //saves the article in db
    saveMemory(memory) {
        console.log("Book component: Save memory called");
        console.log(memory);
        console.log(event);
        helpers.saveMemoryInDB(memory);

    }

    render() {
        return (
            <div>
                <div>
                    <MemoryPage saveMemory={this.saveMemory}/>
                </div>
            </div>
        )
    }
}

export default Book;
