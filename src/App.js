import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateError = async () => {
        await this.setState({errorMessage: `This error happend in ${moment().format('YYYY/MM/DD')}`});
        window.trackJs.track(this.state.errorMessage);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Click in the buttom to log an Error on TrackJS.
                </p>
                <button onClick={this.generateError}>
                    GENERATE ERROR
                </button>
                <br/>
                <br/>{this.state.errorMessage}
            </div>
        );
    }
}

export default App;
