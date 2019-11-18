import React from 'react';
// import user from './rrr.png';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    updateEmailState = (e) => {

        this.setState({ email: e.target.value })
    }
    updatePasswordState = (e) => { this.setState({ password: e.target.value }) }

    onLogin = () => {
        // console.log('e');
        let body = { email: this.state.email, password: this.state.password };
        axios.post('http://localhost:3000/todos/login', body)
            .then((res) => {
                console.log(res.data)
                if (res.data.length > 1) {
                    alert("Successful!!");
                    window.location.href = "/contact";
                } else {
                    alert("Incorrect User!!");
                }
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <img src={user} clas="App-logo" alt="user" /> */}
                    <div className="col-lg-8">
                        <div className="col-lg-6">
                              <input type="text" className="form-control" placeholder="Enter email" required="required" value={this.state.email} onChange={this.updateEmailState} />
                        </div><br/>
                    </div>
                    <div className="col-lg-8">
                        <div className="col-lg-6">
                             <input type="password" className="form-control" placeholder="Password" required="required" value={this.state.password} onChange={this.updatePasswordState} />
                        </div><br/>
                    </div>
                    <div className="col-lg-8">
                        <div className="col-lg-6">
                              <button onClick={this.onLogin} className="btn btn-success">Login</button>
                        </div><br/>
                    </div>
                   

                </div>
            </div>
        );
    }





}



