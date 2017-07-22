import React, {Component} from 'react';
class Signup extends Component {
    constructor(props) {
        super(props);
      
      this.state = { text1: "", text2: "", text3: "", text4: "", text5: "", text6: ""};
       this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
       let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState); 

    }
    handleSubmit(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();
        // Set the parent to have the search term
        this.({text4: ""});
        this.props.setprops.settext1(this.state.text1);
        this.setState({text1: ""});
        this.props.settext2(this.state.text2);
        this.setState({text2: ""});
        this.props.settext3(this.state.text3);
        this.setState({text3: ""});
        this.props.settext4(this.state.text4);
        this.setStatetext5(this.state.text5);
        this.setState({text5: ""});
        this.props.settext6(this.state.text6);
        this.setState({text6: ""});
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
                  id = "text1"
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
                  id = "text2"
                  value={this.state.text2}
                  onChange={this.handleChange.bind(this)}
                required />
                </div>
                <div className="form-group">
                  <label>About</label>
                  <input type="text" 
                  className="form-control" 
                  placeholder="About You" 
                  name="about"
                  id = "text3"
                  value={this.state.text3}
                  onChange={this.handleChange.bind(this)}
                required />
                </div>
                
                 <div className="form-group">
                  <label>Email</label>
                  <input type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  name="email"
                  id = "text4"
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
                  id = "text5"
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
                  id = "text6"
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