import React from "react";
import {withRouter} from "react-router-dom";

// import './nav.scss';
class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"umar"}>
            <nav className={"navbar navbar-expand-lg navbar-light bg-white"}>

                <a className={"navbar-brand"}
                   href="#"
                >Instagram</a>
                <button className={"navbar-toggler"}
                        type={"button"} data-bs-toggle={"collapse"}
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

                        <i className={'fab  fa-large fa-facebook-messenger'}/>

                        <i className={'far fa-compass'}/>
                        <i className={'far fa-heart'}/>
                    </div>
                </div>

            </nav>
        </div>

    }
}

export default withRouter(Nav);