import React, {Component} from 'react';
import helpers from '../../util/helpers';
import {Link, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            authenticated: false,
            errMssg: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {}

    handleChange(event) {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    }
    handleSubmit(event) {
        event.preventDefault();
        helpers.checkLogin(this.state).then((result) => {
            console.log(`Login result`);
            console.log(result);

            if (result.data != 'invalid') {
                console.log(`Login success`);
                localStorage.setItem('name',result.data.firstname);
                localStorage.setItem('userId',result.data._id);
                console.log(localStorage);
                this.setState({authenticated: true});


            } else {
                this.setState({errMssg: 'Invalid Username or Password'});
                console.log(`Login failed`);

            }
        });
    }

    render() {
        const {from} = {
            from: {
                pathname: '/saved'
            }
        }

        if (this.state.authenticated) {
            console.log('im authenticated');
            console.log(this.state);
            // localStorage.setItem('name',this.state);
            return (<Redirect to={from}/>)
        }

        return (

            <div className="container authpadding">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                        <h1>Welcome to</h1>
                        <h1 id="authlogo">MemorySTACK</h1>
                        <p></p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                                <h1>Login</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Email" name="email" id="email" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password" id="password" onChange={this.handleChange} required/>
                                    </div>
                                    <button type="submit" className="special">Submit</button>
                                    <div>{this.state.errMssg}</div>
                                </form>
                                <p>Need an account?<Link to="/signup"><p>Sign Up Now!</p>
                                    </Link></p>

                        </div>
                    </div>
                    {/*<div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">

                                <h1>Login</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Email" name="email" id="email" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password" id="password" onChange={this.handleChange} required/>
                                    </div>
                                    <button type="submit" className="special">Submit</button>
                                    <div>{this.state.errMssg}</div>
                                </form>
                                <p>Need an account?<Link to="/signup"><p>Sign Up Now!</p>
                                    </Link></p>
                        </div>

                    </div>*/}
                </div>


        )
    }

}
export default Login;
