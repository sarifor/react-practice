import React, { Component } from 'react';
import EventPractice from './EventPractice';

class App extends Component {

    _test = () => {
        // const key = process.env.REACT_APP_KEY // Value is stored in GitHub Actions
        console.log(process.env.REACT_APP_KEY);
        // console.log(key); // It's just an arbitrary setence for test commit

        if (key === "testtest") {
            console.log(true);
        } else {
            console.log(false);
        }
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