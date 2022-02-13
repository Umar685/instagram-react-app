import { Component } from "react";
import './Counter.scss';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 6
        }
    }

    render() {
        let {count} = this.state;

        return <>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                this.setState({
                    count: count + 1
                })
            }}>Increment</button>
        </>
    }
}

export default Counter;