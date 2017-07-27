import React, {Component} from 'react';
import Time from 'react-time';
import TextEditor from './TextEditor';
import {Redirect} from 'react-router-dom';

class MemoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            data: "",
            userId: localStorage.userId
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        console.log(target.name);
        console.log(target.value);

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Query target" + event.target);
        this.props.saveMemory(this.state);
        this.setState({});
    }

    onChangeText(contents) {
        console.log('MemoryPage : onChangeText got the contents');
        console.log(contents);
        this.setState({data: contents});
    }

    render() {
        const name = localStorage.name;
        console.log(localStorage);
        let now = new Date();
        let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")

        return (
            <div className="col-sm-12">
                <h1 id="headerlogo">memorystack</h1>
                <div id="welcomecenter">
                    <h1>Welcome, {name}</h1>
                    <h3>
                        <Time value={now} format="MM/DD/YYYY"/></h3>

                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2">{/*col-lg-4 col-lg-offset-2*/} {/*<label htmlFor="title"><h2>Title</h2></label>*/}
                                <h2>Memory Title:</h2>
                                <input type="text" name="title" id="title" onChange={this.handleInputChange.bind(this)}/>
                                <h2>Memory Body:</h2>
                                <TextEditor onChangeText={this.onChangeText}/>

                                <button type="submit" className="special" id="save">
                                    Save
                                </button>
                                <button type="submit" id="clearButton">
                                    <span aria-hidden="true"></span>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MemoryPage;