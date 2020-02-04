import React, { Component } from 'react'
import './Play.css'

export default class Buttons extends Component {
    buttonsContainer = {
        position: 'absolute',
        bottom: '3%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        maxHeight: '200px',
        height: '20%',
    }
    careStyle = {
        width: '40%',
        height: '100',
        borderRadius: '20%',
        border: 'none',
        backgroundColor: '#682727',
        color: '#ABFFA9',
        fontSize: '2rem',
        textAlign: 'center',
        filter: 'drop-shadow(5px 5px 10px black)',
        cursor: 'pointer'



    }
    bahStyle = {
        width: '40%',
        height: '100',
        borderRadius: '20%',
        border: 'none',
        backgroundColor: '#ABFFA9',
        color: '#1B262C',
        fontSize: '2.5rem',
        textAlign: 'center',
        filter: 'drop-shadow(5px 5px 10px black)',
        cursor: 'pointer'



    }
    render() {
        return (
            <div style={this.buttonsContainer}>
                <button style={this.careStyle}>Care About</button>
                <button style={this.bahStyle}>Bah!</button>

            </div>
        )
    }
}
