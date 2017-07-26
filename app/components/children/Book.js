//* **Search** - queries the NYT API for articles.
//Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.
//Include React
import React from 'react';
import MemoryPage from './memory/MemoryPage';
import helpers from '../util/helpers';
import { Redirect } from 'react-router-dom';


class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSaved: false
        }
        this.saveMemory = this.saveMemory.bind(this);
        console.log(`Book constructor called`);
    }

    //saves the article in db
    saveMemory(memory) {
        console.log("Book component: Save memory called");
        console.log(memory);
        console.log(event);
        helpers.saveMemoryInDB(memory).then((results) => {
            this.setState({showSaved: true});
        });
    }

    render() {
        const {saved} = {
            saved: {
                pathname: '/saved'
            }
        }


        if (this.state.showSaved) {
            console.log('Book showing saved');
            return (<Redirect to={saved}/>)
        }

        return (
            <div className=""> {/* container */}
               {/* <div className="">  row */}
                    <MemoryPage saveMemory={this.saveMemory}/>
                {/*</div>*/}
            </div>
        )
    }
}

export default Book;
