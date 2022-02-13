import React from "react";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import './Forget.scss';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";

class Forget extends React.Component {
    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"Forget"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                <a className={"navbar-brand"} href="#">Instagram</a>


            </nav>
            <div className={"card"}>
                <i className="fas fa-lock"></i>
                <h5 className={"heading"}>Trouble Logging In?</h5>
                <div className={"text"}>Enter your email, phone, or username and
                    <br/>we'll send
                    you a link to get back into your account.
                </div>
                <form className={"form"}>

                    <input type={"text"} placeholder={"Enter Phone umber or Email"} className="form-control"/>

                    <br/>
                    <button className={"btn btn-lg btn-primary  form-control"}>Send Login Link</button>

                </form>
                <div className="or-container mb-3">
                    <div className="or-line mr-3"></div>
                    <div className="or">OR</div>
                    <div className="ml-3 or-line"></div>
                </div>
                <h5 className={"heading2"}>Create New Account</h5>

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

export default withRouter(Forget);