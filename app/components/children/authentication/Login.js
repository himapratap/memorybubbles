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

            if (result.status == 200) {
                this.setState({authenticated: true});
                console.log(`Login success`);
                localStorage.setItem('name',result.data.firstname);
            } else {
                this.setState({errMssg: 'Invalid Username or Password'});
                console.log(`Login failed`);

            }
        });
    }

    render() {
        const {from} = {
            from: {
                pathname: '/new'
            }
        }

        if (this.state.authenticated) {
            console.log('im authenticated');
            return (<Redirect to={from}/>)
        }

        return (
          
            <div className="container">
                    <div className="row">
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
                                    <button type="submit" className="btn btn-default">Submit</button>
                                    <div>{this.state.errMssg}</div>
                                </form>
                                <p>Need an account?
                                    <a href="/signup">Signup</a>
                                </p>
                        </div>
                        <div className="col-md-4">
                        </div>
                        
                    </div>
                </div>
           

        )
    }

}
export default Login;
