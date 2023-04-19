import React, { Component } from 'react';
import EventPractice from './EventPractice';

class App extends Component {

    _test = () => {
        console.log(process.env.REACT_APP_KEY);
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