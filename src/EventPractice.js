import React, { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Write Anything you want"
                    onChange={ // Whenever write something, the value will be shown on Console Log
                        (e) => {
                            console.log(e.target.value);
                        }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;