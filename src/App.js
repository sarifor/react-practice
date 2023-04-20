import React, { Component } from 'react';

class App extends Component {
    state = {
    };

    componentDidMount () {
        this._getData();
    }

    _getData = async () => {
        const data = await this._callApi();
        this.setState({data}); // Must use {data}
    }

    _callApi = async () => {
        const data = await fetch(`http://localhost:3000/`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
        return data;
    }

    render() {
        const data = this.state.data;
        console.log(data);

        return (
            <>
            </>
        );
    }
}

export default App;