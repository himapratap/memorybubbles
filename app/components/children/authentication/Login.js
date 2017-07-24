import React, {Component} from 'react';
import helpers from '../../util/helpers'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.login(this.state);
        this.setState({})
    }

    render() {
        return (
            <div>
                <div>
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
                    </form>
                    <p>Need an account? <a href="/signup">Signup</a></p>
                </div>
            </div>
        )
    }
}
export default Login;





        