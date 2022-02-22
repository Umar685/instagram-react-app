import React from 'react';
import {withRouter} from "react-router-dom";
import './RegisterActivity.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import axios from "axios";

class RegisterActivity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'umar@gmail.com',
            password: '12345',
            full_name: 'Heavy',
            username: 'UMAR FAROOQ',
            image: ''
        }
    }

    sendDataToRegisterApi = () => {
        const params = new FormData();

        params.append('email', this.state.email);
        params.append('password', this.state.password);
        params.append('full_name', this.state.full_name);
        params.append('username', this.state.username);
        params.append('image', this.state.image);
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/register_user.php', params, config)
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
        return <div className={"register-activity"}>

            <div className="container login-card-container">

                <div className="login-card">
                    <div className="bg-img"/>
                    <div className="bg-img-overlay"/>

                    <div className="card-body">
                        <h1 className="heading">REGISTRATION FORM</h1>

                        <div className="login-form">
                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="EMAIL"
                                    name="email"
                                    value={this.state.email}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            email: event.target.value
                                        });
                                    }}/>
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="FULL NAME"
                                    value={this.state.full_name}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            full_name: event.target.value
                                        });
                                    }}
                                    name="fullname"
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="PASSWORD"
                                    name="password"
                                    value={this.state.password}
                                    onChange={event => {
                                        this.setState({
                                            ...this.state,
                                            password: event.target.value
                                        });
                                    }}
                                />
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
                                    }}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control"
                                       type="file"
                                       name="image"
                                       onChange={event => {
                                           this.setState({
                                               ...this.state,
                                               image: event.target.files[0]
                                           });
                                       }}
                                />
                            </div>
                            <button type="submit"
                                    className="btn btn-success form-control btn-xlg submit-btn"
                                    name="login"
                                    onClick={this.sendDataToRegisterApi}
                            >SUBMIT
                            </button>
                        </div>

                        <div className="bottom-half">
                            <div className="or-container mb-3">
                                <div className="or-line mr-3"/>

                                <div className="ml-3 or-line"/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default withRouter(RegisterActivity);