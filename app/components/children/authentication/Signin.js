import React, {Component} from 'react';

class Signin extends Component {

    constructor(props) {
        super(props);
      //  this.saveArticle = this.saveArticle.bind(this);
    }

    render() {
        return (
            <div className="container">
    <div className="col-sm-6 col-sm-offset-3">
        <h1><span className="fa fa-sign-in"></span> Login</h1>
        <form action="/signin">
            <div className="form-group">
                <label>Email</label>
                <input type="text" class="form-control" name="email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password"/>
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Login</button>
        </form>
        <p>Need an account? <a href="/signup">Signup</a></p>
        <p>Or go <a href="/">home</a>.</p>
    </div>
</div>
           
            )
    }

}

export default Signin;
