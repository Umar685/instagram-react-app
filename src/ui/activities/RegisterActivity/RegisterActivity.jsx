import React from 'react';
import {withRouter} from "react-router-dom";
import './RegisterActivity.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";

class RegisterActivity extends React.Component {
    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"register-activity"}>

            <div className="container login-card-container">

                <div className="login-card">
                    <div className="bg-img"></div>
                    <div className="bg-img-overlay"></div>

                    <div className="card-body">
                        <h1 className="heading">REGISTRATION FORM</h1>

                        <form className="login-form" action="" encType="multipart/form-data" method="post">
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER PHONE NUMBER OR EMAIL"
                                       name="email"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER YOUR FULL NAME"
                                       name="fullname"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER YOUR USER NAME"
                                       name="username"/>
                            </div>

                            <div className="form-group mb-2">
                                <input className="form-control" type="password" placeholder="ENTER YOUR PASSWORD"
                                       name="password"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="file" name="image"/>
                            </div>
                            <button type="submit" className="btn btn-success form-control btn-xlg submit-btn"
                                    name="login"
                                    onClick={() => {
                                        urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
                                        this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                                    }}
                            >SUBMIT
                            </button>
                        </form>

                        <div className="bottom-half">
                            <div className="or-container mb-3">
                                <div className="or-line mr-3"></div>

                                <div className="ml-3 or-line"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default withRouter(RegisterActivity);