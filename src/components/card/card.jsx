import React from 'react';
import {withRouter} from "react-router-dom";
import './card.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import axios from "axios";

class card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return <div className={"card"}>
            <img src={require('../../../images/card_bg.jpeg')}
                 height={"600px"}
                 width={"200px"}
                 className={"card-img-top"}
                 alt={"Nothing"}/>
            <div className={"icons"}>
                <i className={'far fa-heart fa-lg '}/>
                <i className={'far fa-comment fa-lg '}/>
                <i className={'fab fa-telegram-plane fa-lg '}/>
                <i className={'far fa-bookmark fa-lg '}/>
            </div>
            <div className={"card-body"}>
                <p>ubuntumaniac </p>
                <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                    eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..
                </p>
                <hr className={"line"}/>
                <p className={"card-text-1"}>
                    <i className={"far fa-grin fa-lg"}/> &nbsp;WRITE A
                    COMMENT HERE!
                </p>
            </div>
        </div>

    }
}

export default withRouter(card);