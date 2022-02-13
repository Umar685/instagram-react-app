import React from 'react';
import {withRouter} from "react-router-dom";
import './LoginActivity.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";

class LoginActivity extends React.Component {
    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"login-activity"}>

            <div className="container login-card-container">

                <div className="login-card">
                    <div className="bg-img"></div>
                    <div className="bg-img-overlay"></div>

                    <div className="card-body">
                        <h1 className="heading">INSTAGRAM</h1>
                        <form className="login-form" action="" encType="multipart/form-data" method="post">
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER PHONE NUMBER OR EMAIL"
                                       name="email1"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="password" placeholder="ENTER YOUR PASSWORD"
                                       name="password1"/>
                            </div>
                            <button type="submit" className="btn btn-success form-control btn-xlg submit-btn"
                                    name="login"
                                    onClick={() => {
                                        urlArgsBundle.setActivityTag(ACTIVITY_TAG.HOME)
                                        this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                    }}
                            >LOGIN
                            </button>
                        </form>

                        <div className="bottom-half">
                            <div className="or-container mb-3">
                                <div className="or-line mr-3"></div>
                                <div className="or">OR</div>
                                <div className="ml-3 or-line"></div>
                            </div>
                            <div className="registration">DON'T HAVE AN ACCOUNT?
                                <a href="#" className="register-link"
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
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default withRouter(LoginActivity);