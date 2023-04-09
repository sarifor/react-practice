import React, { Component } from 'react';

class EventPractice extends Component {
    state = { // Why do not use constructor for state in class component?
        message: ''
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
                    onChange={ // Whenever write something, the value will be shown on Console Log
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => { // Why is 'e' not used?
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>Check</button>
            </div>
        );
    }
}

export default EventPractice;