import React from 'react';
import './Message.scss';
class Message extends React.Component{
    render() {
        return<div className={"Message"}>
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
            {/*<hr className={'lines'}/>*/}

            <div className={"container "}>
                <div className={"row"}>
                <div className={"first "}>
<b className={"bold"}>androdragon5</b>

                <i className={"fas fa-marker"}></i>
                <hr className={"line"}/>
                   <div className={"details"}>
                    <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                    <div className={"name"}>Gufran Ahmad Nadeem<br/>
                        <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
                    <div className={"details"}>
                        <img className={"image"} src={require('../../../images/frame.jpeg')}/>
                        <div className={"name"}>Gufran Ahmad Nadeem<br/>
                            <div className={"text"}>Hello Hi! How are you?.11h</div></div>

                    </div>
            </div>
                <div className={"second "}>
                    <i className="fab fa-telegram"></i>
                <div className={"your"}> Your messages</div>
                    <div className={"note"}>Send private photos and messages to a friend or group.</div>
<button className={"btn btn-primary button"}>Send message</button>
                </div>
        </div>
            </div>
        </div>
    }

}
export default Message;