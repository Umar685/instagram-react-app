import React from 'react';
import {withRouter} from "react-router-dom";
import './Home.scss';
import UrlArgsBundle from "../../../core/url_args_bundle";
import {ACTIVITY_TAG} from "../../../utils/Constants";
import axios from "axios";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post:[],
            comment:'WRITE A COMMENT HERE!',
            salman:[],
          count:0

        }
    }

    getPost = () => {
        const params = new FormData();

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/deliver.php', params, config)
            .then(res => {
                this.setState({...this.state , post: res.data})
            })
    }

    getComment =() =>{
        const params = new FormData();

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/deliver2.php', params, config)
            .then(res => {
                this.setState({...this.state , salman: res.data})
            })
    }

    componentDidMount = () => {
        this.getPost();
        this.getComment();

    }
    sendDataToRegisterApi = () => {
        const params = new FormData();

        params.append('comment', this.state.comment);

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        axios.post('http://localhost:4000/comment.php', params, config)
            .then(res => {
                console.log(res.data)
            })
    }
increment=() =>{
    this.setState({ count : this.state.count + 1})
}
    render() {

        console.log(this.state.post)
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);

        return <div className={"Home"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                <a className={"navbar-brand"}
                   href="#">Instagram</a>
                <button className={"navbar-toggler"}
                        type={"button"}
                        data-bs-toggle={"collapse"}
                        data-bs-target={"#navbarSupportedContent"}
                        aria-controls={"navbarSupportedContent"}
                        aria-expanded={"false"}
                        aria-label={"Toggle navigation"}>
                    <span className={"navbar-toggler-icon"}/>
                </button>
                <div className={"collapse navbar-collapse"}
                     id={"navbarSupportedContent"}>

                    <form className={"d-flex"}>
                        <input className={"form-control me-2 bg-light"}
                               type={"search"}
                               placeholder={"Search"}
                               aria-label={"Search"}/>

                    </form>
                    <div className={"icon_container"}>

                        <i onClick={() => {
                            urlArgsBundle.setActivityTag(ACTIVITY_TAG.MESSAGE)
                            this.props.history.push(urlArgsBundle.getArgsAsUrlParams())
                        }} className={'fab  fa-large fa-facebook-messenger'} />

                        <i className={'far fa-compass'} />
                        <i className={'far fa-heart'} />
                    </div>
                </div>

            </nav>

            <div className={"row"}>
                <div className={"col-8"}>
                    <div className={"card_container"}>
                        {
                            this.state.post.map(
                                show =>

                                    <div className={"card"}>

                                        <div className={"container1"}>
                                            <img src={require(`../../../../../instagram_apis/images/${show['image']}`)} className={"picture1"}/>
                                            <div><b className={"bold"}>{show['hello']}</b>

                                            </div>

                                        </div>
                                        <img src={require(`../../../../../instagram_apis/images/${show["image"]}`)}
                                             className={"card-img-top"}
                                             alt={"Nothing"}/>
                                        <div className={"icons"}>
                                     <i className={'far fa-heart fa-lg '}
                                           onClick={ this.increment}
                                     />
                                            <i className={'far fa-comment fa-lg '}/>
                                            <i className={'fab fa-telegram-plane fa-lg '}/>
                                            <i className={'far fa-bookmark fa-lg '}/>&nbsp;
                                            <button className={"btn btn-danger umar"}>Delete</button>
                                        </div>
                                        <p className={"para"}>{this.state.count} likes</p>
                                        <div className={"card-body"}>
                                            <p>{show['post']} </p>
                                            <p className={"card-text-1"}>{show['discription']}</p>
                                            <hr className={"line"}/>
                                            <div className={"row"}>

                                                <p className={"card-text-1"}>
                                                    {
                                                        this.state.salman.map(
                                                            comment=>
                                                                <div>
                                                                    {comment['comment']}
                                                                </div>
                                                        )
                                                    }
                                                    <i className={"far fa-grin fa-lg"}/>  &nbsp;
                                                    <input

                                                        type={"text"}
                                                        placeholder={"WRITE A COMMENT HERE!"}
                                                        name={"comment"}
                                                        value={this.state.comment}
                                                        onChange={event => {
                                                            this.setState({
                                                                ...this.state,
                                                                comment: event.target.value
                                                            });
                                                        }}
                                                    />
                                                    <button type={"submit"}
                                                            className={"btn btn-success salman"}
                                                            onClick={this.sendDataToRegisterApi}
                                                    >Comment</button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }


                    </div>
                </div>
                <div className={"col-4 second"}>
                    <div className={"container"}>
                        <img src={require('../../../images/frame.jpeg')}
                             className={"picture"}
                             alt={"hello"}/>
                        <div><b>adnandani7272</b>
                            <br/>
                            <div className={"adnan"}>Adnan Aslam</div>
                        </div>
                        <a className={"uncle"} href={"#"}>Switch</a>
                    </div>
                    <div className={"container"}>
                        <div className={"adnan1"}>Suggestions for you</div>
                        <a className={"uncle1"} href={"#"}>See all</a>
                    </div>
                    <div className={"container1"}>
                        <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
                        <div><b>alybhatti2546</b>
                            <br/>
                            <div className={"adnan2"}>Followed by umairawan17 + 3 more</div>
                        </div>
                        &nbsp;
                        <a className={"uncle2"} href={"#"}>Follow</a>
                    </div>
                    <div className={"container1"}>
                        <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
                        <div><b>zai.nab5371</b>
                            <br/>
                            <div className={"adnan2"}>New to Instagram</div>
                        </div>
                        &nbsp;
                        <a className={"uncle3"} href={"#"}>Follow</a>
                    </div>
                    <div className={"container1"}>
                        <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
                        <div><b>shaharyarzafar2050</b>
                            <br/>
                            <div className={"adnan2"}>Followed by meerzah_zaid + 4 more</div>
                        </div>
                        &nbsp;
                        <a className={"uncle2"} href={"#"}>Follow</a>
                    </div>
                    <div className={"text"}>About-Help-PressAPIJobs-Privacy-Terms<br/>Locations-Top
                        accounts-Hashtags-Language<br/><br/>
                        © 2022 INSTAGRAM FROM META

                    </div>

                </div>
            </div>
        </div>
    }
}

export default withRouter(Home);