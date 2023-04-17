import React, { Component } from 'react';
import EventPractice from './EventPractice';
import { config } from './apikeys.js';

class App extends Component {

    _test = () => {
        const key = config.TEST_KEY
        console.log(key); // It's just an arbitrary setence for test commit
    }

    render() {
        return (
            <>
                {this._test()}
                <EventPractice />
            </>
        );
    }
}

export default App;