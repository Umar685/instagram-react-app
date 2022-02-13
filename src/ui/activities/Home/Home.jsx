import React from 'react';
import './Home.scss';

class Home extends React.Component {
    render() {
        return <div className={"Home"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                    <a className={"navbar-brand"} href="#" >Instagram</a>
                    <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"}
                            data-bs-target={"#navbarSupportedContent"} aria-controls={"navbarSupportedContent"}
                            aria-expanded={"false"} aria-label={"Toggle navigation"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>

                        <form className={"d-flex"}>
                            <input className={"form-control me-2 bg-light"} type={"search"} placeholder={"Search"} aria-label={"Search"}/>

                        </form>
                        <div className={"icon_container"}>
                        <i className={'fab  fa-large fa-facebook-messenger'}></i>
                        <i className={'far fa-compass'}></i>
                        <i className={'far fa-heart'}></i>
                        </div>
                    </div>

            </nav>
<div className={"row"}>
    <div className={"col-8"}>
            <div className={"card_container"}>
                <div className={"card"}>
                    <img src={require('../../../images/frame.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <div className={"row"}>

                            <p className={"card-text-1"}>    <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                                COMMENT HERE!</p>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/card_bg.jpeg')} height={"600px"} width={"200px"} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/7a.jpg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/7a.jpg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/download.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/mahira.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/good.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/umar.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/beauty.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/a.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/b.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={require('../../../images/d.jpeg')} className={"card-img-top"} alt={"Nothing"}/>
                    <div className={"icons"}>
                        <i className={'far fa-heart fa-lg '}></i>
                        <i className={'far fa-comment fa-lg '}></i>
                        <i className={'fab fa-telegram-plane fa-lg '}></i>
                        <i className={'far fa-bookmark fa-lg '}></i>
                    </div>
                    <div className={"card-body"}>
                        <p >ubuntumaniac </p>
                        <p className={"card-text-1"}>Pinephone keyboard arrived. Working gr
                            eat with i3wm. This keyboard can turn <br/>he Pinephone into a mini Linux laptop..</p>
                        <hr className={"line"}/>
                        <p className={"card-text-1"}>  <i className={"far fa-grin fa-lg"} ></i> &nbsp;WRITE A
                            COMMENT HERE!</p>
                    </div>
                </div>
            </div>
    </div>
    <div className={"col-4 second"}>
        <div className={"container"}>
<img src={require('../../../images/frame.jpeg')} className={"picture"}/>
        <div ><b>adnandani7272</b>
        <br/>
            <div className={"adnan"}>Adnan Aslam</div></div>
            <a className={"uncle"} href={"#"}>Switch</a>
    </div>
        <div className={"container"}>
            <div className={"adnan1"}>Suggestions for you</div>
            <a className={"uncle1"} href={"#"}>See all</a>
        </div>
        <div className={"container1"}>
            <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
            <div ><b>alybhatti2546</b>
                <br/>
                <div className={"adnan2"}>Followed by umairawan17 + 3 more</div></div>&nbsp;
            <a className={"uncle2"} href={"#"}>Follow</a>
        </div>
        <div className={"container1"}>
            <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
            <div ><b>zai.nab5371</b>
                <br/>
                <div className={"adnan2"}>New to Instagram</div></div>&nbsp;
            <a className={"uncle3"} href={"#"}>Follow</a>
        </div>
        <div className={"container1"}>
            <img src={require('../../../images/frame.jpeg')} className={"picture1"}/>
            <div ><b>shaharyarzafar2050</b>
                <br/>
                <div className={"adnan2"}>Followed by meerzah_zaid + 4 more</div></div>&nbsp;
            <a className={"uncle2"} href={"#"}>Follow</a>
        </div>
        <div className={"text"}>About-Help-PressAPIJobs-Privacy-Terms<br/>Locations-Top accounts-Hashtags-Language<br/><br/>
            © 2022 INSTAGRAM FROM META

        </div>

    </div>
        </div>
        </div>
    }
}
export default Home;