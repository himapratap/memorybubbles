import React, {Component} from 'react';
import  TextEditor  from './TextEditor';

class MemoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            data: "",
         };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <div className="col-sm-12">
                <div>
                    <div>
                        <h3>
                            <i></i>
                            New Memory</h3>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange}/>
                            </div>

                            <div>
                                 {/* <input type="text" name="data" id="data" value={this.state.data} onChange={this.handleInputChange}/> */}
                                 <TextEditor/>
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
            </div>
        )
    }
}

export default MemoryPage;
