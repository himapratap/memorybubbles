import React, {Component} from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);
      //  this.saveArticle = this.saveArticle.bind(this);
    }

    render() {
        return (
            <div className="container">
              <h2 className="page-header">Register</h2>
              <form >
                 <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="First Name" name="firstname"/>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" name="lastname"/>
                </div>
                <div className="form-group">
                  <label>About</label>
                  <input type="text" className="form-control" placeholder="About You" name="about"/>
                </div>
                
                 <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password"/>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password2"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
            )
    }

}

export default Signup;
