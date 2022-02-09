import React from 'react';
import './SimpleCard.scss';

class SimpleCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let imgUrl = "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

        return <div className={"my-simple-card"}>
            <img src={imgUrl} />
            <div className={"bottom-area"}>
                <h1>{this.props.main_text}</h1>
                <p>{this.props.description}</p>
            </div>
        </div>
    }

}

export default SimpleCard;