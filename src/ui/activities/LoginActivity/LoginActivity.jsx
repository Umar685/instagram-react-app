import React from 'react';
import {withRouter} from "react-router-dom";
import './LoginActivity.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import axios from "axios";

class LoginActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email1: 'umar@gmail.com',
            password1: '12345',
            username:'Heavy',
            salman:[]
        }
    }

    sendDataToRegisterApi = () => {
        const params = new FormData();
        params.append('email1', this.state.email1);
        params.append('password1', this.state.password1)
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/login_user.php', params, config)
            .then(res => {
                console.log(res.data)
                if (res.data.state === 'NO_USER_FOUND') {
                    console.log('no user found')
                } else {
                    const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
                    urlArgsBundle.setActivityTag(ACTIVITY_TAG.HOME)
                    this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                }
            });


    }
    componentDidMount() {
        const params = new FormData();

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/login_user.php', params, config)
            .then(res => {
                this.setState({...this.state , salman: res.data})
            })
    }

    render() {
        localStorage.setItem('id',this.state.salman['id']);
        localStorage.setItem('email1',this.state.email1);
        localStorage.setItem('password1',this.state.password1);
        localStorage.setItem('username',this.state.username);
        console.log(this.state.salman['id'])
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"login-activity"}>

            <div className="container login-card-container">

                <div className="login-card">
                    <div className="bg-img"></div>
                    <div className="bg-img-overlay"></div>

                    <div className="card-body">
                        <h1 className="heading">INSTAGRAM</h1>
                        <div className="login-form">
                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="EMAIL"
                                    name="email1"
                                    value={this.state.email1}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            email1: event.target.value
                                        });
                                    }}/>
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="PASSWORD"
                                    name="password1"
                                    value={this.state.password1}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            password1: event.target.value
                                        });
                                    }}/>
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="USERNAME"
                                    name="username"
                                    value={this.state.username}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            username: event.target.value
                                        });
                                    }}/>
                            </div>
                            <button type="submit"
                                    className="btn btn-success form-control btn-xlg submit-btn"
                                    name="login"
                                    onClick={this.sendDataToRegisterApi}
                            >LOGIN
                            </button>
                        </div>

                        <div className="bottom-half">
                            <div className="or-container mb-3">
                                <div className="or-line mr-3"/>
                                <div className="or">OR</div>
                                <div className="ml-3 or-line"/>
                            </div>
                            <div className="registration">DON'T HAVE AN ACCOUNT?
                                <a href="#"
                                   className="register-link"
                                   onClick={() => {
                                       urlArgsBundle.setActivityTag(ACTIVITY_TAG.REGISTER_ACTIVITY)
                                       this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                   }}>REGISTER NOW</a>
                            </div>
                            <br/>
                            <div className="or-container mb-3">
                                <div className="or"
                                     onClick={() => {
                                         urlArgsBundle.setActivityTag(ACTIVITY_TAG.FORGET)
                                         this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                     }}>Forget Password?
                                </div>
                            </div>
                            <div className="or-container mb-3">
                                <div className="or"
                                     onClick={() => {
                                         urlArgsBundle.setActivityTag(ACTIVITY_TAG.CHANGE)
                                         this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                     }}>Change Password
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default withRouter(LoginActivity);