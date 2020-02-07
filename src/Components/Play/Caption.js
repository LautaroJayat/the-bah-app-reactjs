import React, { Component } from 'react'
import './Play.css'


export default class Caption extends Component {
    captionContainer = {
        margin: 'auto',
        width: '80%',
        height: 'auto',
        minHeight: '100px',
        position: 'relative',
        top: '56%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#0F4C75',
        borderRadius: '10px 30px',
        alignItems: 'center',
        filter: 'drop-shadow(5px 5px 10px black)',

    }
    captionStyle = {
        width: '90%',
        height: 'auto',
        color: '#BBE1FA',
        textAlign: 'center',
        padding: '0',
        letterSpacing: '0.1rem',
        cursor: 'default'

    }
    componentDidMount() {
        console.log('caption did mount')
        console.log('-------------------')

    }

    componentDidUpdate() {
        console.log('caption did update')
        console.log('-------------------')

    }

    render() {
        return (
            <div style={this.captionContainer}>
                <p style={this.captionStyle}>{this.props.news.length > 0 ? this.props.news[this.props.counter].title : "Ready to Bah?"}</p>
            </div>
        )
    }
}
