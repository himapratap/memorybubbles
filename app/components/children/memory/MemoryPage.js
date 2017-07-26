import React, {Component} from 'react';
import Time from 'react-time';
import TextEditor from './TextEditor';
import { Redirect } from 'react-router-dom';

class MemoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            data: "",
            date:"",
            userId : localStorage.userId
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
            this.setState({date: now});
        return (
          
            <div className="col-sm-12">
                     <div>
                        <h3>Hi {name} !!!</h3>
                     </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange}/>
                            </div>
                            
                            <div className="row">
                            
                            <div className="col-md-2 col-md-offset-1">
                                <strong>date:</strong>
                            </div>
                            <div className ="col-md-2">
                                
                            
                                <p> <Time value={now}  format="MM/DD/YYYY" /></p>   
                           
                             </div>

                            </div>

                            <div>
                                {/* <input type="text" name="data" id="data" value={this.state.data} onChange={this.handleInputChange}/> */}
                                <TextEditor onChangeText={this.onChangeText}/>
                            </div>

                            <button type="submit" id="save">
                                <span ></span>
                                Save</button>
                            <button type="submit" id="clearButton">
                                <span aria-hidden="true"></span>
                                Clear</button>
                        </form>
                    </div>
                </div>
         )
    }
}

export default MemoryPage;
