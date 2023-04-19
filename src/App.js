import React, { Component } from 'react';
import EventPractice from './EventPractice';

class App extends Component {

    _test = () => {
        const key = process.env.key
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