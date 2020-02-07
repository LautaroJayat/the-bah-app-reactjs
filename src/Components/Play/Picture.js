import React, { Component } from 'react'
import './Play.css'


export default class Picture extends Component {
    flexContainer = {
        position: 'absolute',
        top: '12%',
        height: '40%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
    containerStyle = {
        width: '80%',
        height: '100%',
        maxWidth: '300px',
        overflow: 'hidden',
        borderRadius: '10%',
        filter: 'drop-shadow(5px 5px 10px black)'


    }

    render() {

        return (
            <div style={this.flexContainer}>
                <div style={this.containerStyle}>
                    <img src={this.props.news.length > 0 ? this.props.news[this.props.counter].media[0]['media-metadata'][1].url : "https://media1.giphy.com/media/YSvwImOVlXMS15KeNk/giphy.gif"} className="playPicture" alt="something"></img>
                </div >
            </div >
        )
    }
}
