import React, { Component } from 'react';

class App extends Component {

    _test = () => {
        console.log("Now in April");
    }

    render() {
        return (
            <>
                {this._test()}
            </>
        );
    }
}

export default App;