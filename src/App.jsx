import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Instagram from "./Instagram";

class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Route path="/" component={Instagram} />
        </BrowserRouter>
    }
}

export default App;