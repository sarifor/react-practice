import React, { Component } from 'react';

class Comment extends Component {
    state = {
        color: null,
    }

    constructor(props) { // Needed to use state
        super(props);    
    }

    render() {
        const style = {
            background: this.props.color
        };

        return (
            <div>
                <div style={style}>
                    <h1>
                        Blah Blah
                    </h1>
                </div>
            </div>
        )   
    }
}

export default Comment;