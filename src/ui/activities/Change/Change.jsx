import React from "react";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import './Change.scss';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import axios from "axios";

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'umar@gamil.com',
            new_password: '12345'
        }
    }

    sendDataToRegisterApi = () => {
        const params = new FormData();


        params.append('new_password', this.state.new_password);
        params.append('email', this.state.email);
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/Change.php', params, config)
            .then(res => {
                console.log(res.data)
            });

        // const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        // urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
        // this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
    }

    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"Change"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                <a className={"navbar-brand"} href="#">Instagram</a>


            </nav>
            <div className={"card"}>
                <i className="fas fa-lock"/>
                <h5 className={"heading"}>Change Password Here!</h5>
                <div className={"text"}>Enter your password and
                    <br/>we'll send
                    you a link to get back into your account.
                </div>
                <div className={"form"}>
                    <input type={"email"}
                           placeholder={"Email"}
                           className="form-control"
                           name={"email"}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   email: event.target.value
                               });
                           }}
                    />
                    <br/>
                    <input type={"password"}
                           placeholder={"Password"}
                           className="form-control"
                           name={"new_password"}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   new_password: event.target.value
                               });
                           }}
                    />

                    <br/>
                    <button className={"btn btn-lg btn-primary  form-control"}
                            onClick={this.sendDataToRegisterApi}
                    >Send Login Link
                    </button>

                </div>
                <div className="or-container mb-3">
                    <div className="or-line mr-3"></div>
                    <div className="or">OR</div>
                    <div className="ml-3 or-line"></div>
                </div>
                <h6 className={"heading3"}
                    onClick={() => {
                        urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
                        this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                    }}>Back To Login</h6>
            </div>
            <br/>
            <div className={"footer"}>
                <p className={"content"}>Meta</p>
                <p className={"content"}> About</p>
                <p className={"content"}> Blog</p>
                <p className={"content"}> Jobs</p>
                <p className={"content"}>Help</p>
                <p className={"content"}> API</p>
                <p className={"content"}>Privacy</p>
                <p className={"content"}>Terms</p>
                <p className={"content"}> Top Accounts</p>
                <p className={"content"}> Hashtags</p>
                <p className={"content"}> Locations</p>
                <p className={"content"}>Instagram Lite</p>


            </div>
            <div className={"last"}>
                <p className={"content"}>English</p>
                <p className={"content1"}> © 2022 Instagram from Meta</p>
            </div>
        </div>
    }
}

export default withRouter(Change);