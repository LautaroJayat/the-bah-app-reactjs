import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.name}</h1>
            </React.Fragment>
        )
    }
}
