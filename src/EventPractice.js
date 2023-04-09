import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Write Anything you want"
                    value={this.state.message}                
                    onChange={
                        this.handleChange
                    }
                />
                <button onClick={
                    this.handleClick
                }>Check</button>
            </div>
        );
    }
}

export default EventPractice;