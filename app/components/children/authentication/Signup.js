import React, {Component} from 'react';
import helpers from '../../util/helpers'


class Signup extends Component {
    constructor(props) {
        super(props);
          this.state = { firstname: "", lastname: "", email: "", password: "", password2: ""};
          this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {

    }

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
            <div >
              <h2>Register</h2>
              <form onSubmit={this.handleSubmit.bind(this)}>
                 <div className="form-group">
                  <label>First Name</label>
                  <input type="text" 
                  placeholder="First Name" 
                  name="firstname"
                  id = "firstname"
                  value={this.state.text1}
                  onChange={this.handleChange.bind(this)}
                required 
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" 
                  className="form-control" 
                  placeholder="Last Name" 
                  name="lastname"
                  id = "lastname"
                  value={this.state.text2}
                  onChange={this.handleChange.bind(this)}
                required />
                </div>          
                 <div className="form-group">
                  <label>Email</label>
                  <input type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  name="email"
                  id = "email"
                  value={this.state.text4}
                  onChange={this.handleChange.bind(this)}
                  required/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  name="password"
                  id = "password"
                  value={this.state.text5}
                  onChange={this.handleChange.bind(this)}
                  required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  name="password2"
                  id = "password2"
                  value={this.state.text6}
                  onChange={this.handleChange.bind(this)}
                  required
                  />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
            )
    }
}
export default Signup;