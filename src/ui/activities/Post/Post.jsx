import React from "react";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import './Post.scss';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import axios from "axios";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: 'Write a post here',
            name: 'Write name heree',
            discription: 'Write discription here',
            image: ''
        }
    }

    sendDataToRegisterApi = () => {
        const params = new FormData();


        params.append('post', this.state.post);
        params.append('name', this.state.name);
        params.append('discription', this.state.discription);
        params.append('image', this.state.image);
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/post.php', params, config)
            .then(res => {
                console.log(res.data)
            });

        // const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        // urlArgsBundle.setActivityTag(ACTIVITY_TAG.LOGIN_ACTIVITY)
        // this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
    }

    render() {
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"Post"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                <a className={"navbar-brand"} href="#">Instagram</a>

            </nav>
            <div className={"card"}>
                <i className="fab fa-telegram-plane fa-lg "/>
                <h5 className={"heading"}>Create Post Here!</h5>
                <div className={"text"}>Enter your post here that you may like to share with yiur friends and family!
                </div>
                <div className={"form"}>
                    <input type={"text"}
                           placeholder={"POST"}
                           className={"form-control"}
                           name={"post"}
                           value={this.state.post}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   post: event.target.value
                               });
                           }}
                    />

                    <input type={"text"}
                           placeholder={"NAME"}
                           className={"form-control"}
                           name={"name"}
                           value={this.state.name}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   name: event.target.value
                               });
                           }}
                    />

                    <input type={"text"}
                           placeholder={"DISCRIPTION"}
                           className={"form-control"}
                           name={"discription"}
                           value={this.state.discription}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   discription: event.target.value
                               });
                           }}
                    />
                    <input type={"file"}
                           placeholder={"POST"}
                           className={"form-control"}
                           name={"image"}
                           onChange={event => {
                               this.setState({
                                   ...this.state,
                                   image: event.target.files[0]
                               });
                           }}
                    />
                    <br/>
                    <button className={"btn btn-lg btn-primary  form-control"}
                            onClick={this.sendDataToRegisterApi}
                    >Create Post
                    </button>

                </div>

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

export default withRouter(Post);