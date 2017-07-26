import React, {Component} from 'react';
import helpers from '../../util/helpers'
import {Redirect} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
            signedUp: false
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

    //saves the article in db
    saveUser(user) {
        console.log(event);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(" Saving user in db");

        helpers.saveUserInDB(this.state).then((result) => {
            this.setState({signedUp: true});
            console.log('yaaay saved');
        });
    }

    render() {
        const {login} = {
            login: {
                pathname: '/login'
            }
        }

        if (this.state.signedUp) {
            console.log('i have signed up, redirecting to login page');
            console.log(this.state);
            // localStorage.setItem('name',this.state);
            return (<Redirect to={login}/>)
        }
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
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
                    <div className="col-md-4"></div>
                </div>
            </div>

        )
    }
}
export default Signup;
