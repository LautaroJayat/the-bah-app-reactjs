import React, { Component } from 'react'
import './Play.css'


export default class Caption extends Component {
    captionContainer = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: '56%',
        display: 'flex',
        justifyContent: 'center',
        filter: 'drop-shadow(5px 5px 10px black)',

    }
    captionStyle = {
        width: '80%',
        height: 'auto',
        backgroundColor: '#0F4C75',
        color: '#BBE1FA',
        textAlign: 'center',
        padding: '1.5rem',
        borderRadius: '10px 30px',
        letterSpacing: '0.1rem',
        cursor: 'default'

    }
    render() {
        return (
            <div style={this.captionContainer}>
                <p style={this.captionStyle}>Coronavirus is going to kill us all... Is this the end of the world?</p>
            </div>
        )
    }
}
