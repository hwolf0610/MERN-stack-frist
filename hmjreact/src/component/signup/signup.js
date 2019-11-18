import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm:''
        };
    }
    updateEmailState = (e) => {    this.setState({ email: e.target.value })    }
    updatePasswordState = (e) => { this.setState({ password: e.target.value }) }
    updateconfirmState = (e) => { this.setState({ confirm: e.target.value }) }

    onSignup = () => {
        if (this.state.password==this.state.confirm) {
            alert("send your infomation!");
            let body = { email: this.state.email, password: this.state.password };
             axios.post('http://localhost:3000/todos/add', body)
            .then((res) => {
                console.log(res.data)
                alert("Successful!!");
            }).catch((error) => {
                console.log(error)
            });
        } else {
            alert("password isn't equal the confirm!");
        }
        
        this.setState({ email: '', password: '',confirm:'' })
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
                            <input type="password" className="form-control" placeholder="confirm" required="required" value={this.state.confirm} onChange={this.updateconfirmState} />
                        </div><br/>
                    </div><br/>
                    <div className="col-lg-8">
                        <div className="col-lg-6">
                              <button onClick={this.onSignup} className="btn btn-success">Signup</button>
                        </div><br/>
                    </div>
                   
                    

                </div>
            </div>
        );
    }





}