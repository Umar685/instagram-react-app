import React from 'react';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "./core/url_args_bundle";
import {ACTIVITY_TAG} from "./utils/Constants";
import Home from "./ui/activities/Home/Home";
import Counter from "./ui/activities/Counter/Counter";
import LoginActivity from "./ui/activities/LoginActivity/LoginActivity";
import Message from "./ui/activities/Message/Message";
import RegisterActivity from "./ui/activities/RegisterActivity/RegisterActivity";
import Forget from "./ui/activities/Forget/Forget";

class Instagram extends React.Component {

    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);

        if (urlArgsBundle.hasActivityTag()) {
            let activityTag = urlArgsBundle.getActivityTag();

            if (activityTag === ACTIVITY_TAG.HOME) {
                return <Home />
            } else if (activityTag === ACTIVITY_TAG.COUNTER) {
                return <Counter />
            }
            else if (activityTag === ACTIVITY_TAG.FORGET) {
                return <Forget/>
            }else if (activityTag === ACTIVITY_TAG.LOGIN_ACTIVITY) {
                return <LoginActivity />
            } else if (activityTag === ACTIVITY_TAG.MESSAGE) {
                return <Message />
            } else if (activityTag === ACTIVITY_TAG.REGISTER_ACTIVITY) {
                return <RegisterActivity />
            }
        } else {
            urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
            this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
        }

        return <></>
    }
}

export default withRouter(Instagram);