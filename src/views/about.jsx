import React, { Component } from 'react';

export default class About extends Component {
    render() {
        const {idx} = this.props.match.params

        return (
            <div>
                About Route Component {idx}
            </div>
        );
    }
}
