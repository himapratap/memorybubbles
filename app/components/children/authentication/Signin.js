import React, {Component} from 'react';

class Signin extends Component {

    constructor(props) {
        super(props);
      //  this.saveArticle = this.saveArticle.bind(this);
      this.state = {text1: "", text2: ""};
       this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }
     // When a user submits...
    handleSubmit(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.settext1(this.state.text1);
        this.setState({text1: ""});
        this.props.settext2(this.state.text2);
        this.setState({text2: ""});
    }
    render() {
        return (
            <div className="container">
    <div className="col-sm-6 col-sm-offset-3">
        <h1><span className="fa fa-sign-in"></span> Login</h1>
        <form action="/signin">
        
            <div className="form-group">
                <label>Email</label>
                <input type="text" 
                class="form-control" 
                value={this.state.text1}
                name="email"
                // id="email"
                onChange={this.handleChange}
                required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" 
              className="form-control" 
              name="password"
              value={this.state.text2}
              // id="password"
              onChange={this.handleChange}/>

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
