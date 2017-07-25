import React, {Component} from 'react';
<<<<<<< HEAD
import helpers from '../../util/helpers';
import {Link, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';

=======
import helpers from '../../util/helpers'
import {Link, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
>>>>>>> 42a153b23599ea0b58c96b077c095e6c79fa1224

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {}

    handleChange(event) {
        let newState = {};
        newState[event.target.id] = event.target.value;
        console.log("targets: " + newState)
        console.log("target fields: " + event.target.value)
        this.setState(newState);

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.saveUser(this.state);
        this.setState({})

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h1>Register</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name" name="firstname" id="firstname" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" name="lastname" id="lastname" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email" name="email" id="email" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="password" id="password" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="password2" id="password2" onChange={this.handleChange} required/>
                            </div>
                            <button type="submit" className="">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>

        )
    }
}
export default Signup;
