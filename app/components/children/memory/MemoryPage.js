import React, {Component} from 'react';

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
                <div className="panel panel-default">
                    <div className="panel-heading panel-s">
                        <h3 className="panel-title">
                            <i className="fa  fa-list-alt"></i>
                            New Memory</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" name="title" id="title" value={this.state.title} onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="text">Text..</label>
                                <textArea  className="form-control" rows="10"  wrap="hard"  name="data" value={this.state.data} onChange={this.handleInputChange}/>
                            </div>

                          <button type="submit" className="btn btn-default " id="save">
                                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                                Save</button>
                            <button type="submit" className="btn btn-default " id="clearButton">
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryPage;
