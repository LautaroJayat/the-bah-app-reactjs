import React, { Component } from 'react'
import './Play.css'


export default class Picture extends Component {
    constructor(props) {
        super(props)
        this.state = { loaded: false }
    }
    handleLoaded = () => {
        setTimeout(() => {
            this.setState({ loaded: true })
        }, 600);
    }

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
        filter: 'drop-shadow(5px 5px 10px black)',
        animation: 'none',
    }


    componentDidMount() {
        this.setState({ loaded: false })
    }


    render() {
        return (
            <div style={this.flexContainer}>
                <div style={this.containerStyle}>
                    {this.props.news.length > 0 ?
                        <React.Fragment>
                            <img
                                src={this.props.news[0].image}
                                onLoad={this.handleLoaded}
                                className={this.state.loaded ? "playPicture" : "dontPlayPicture"}
                                alt={this.props.news[0].alt}>
                            </img>
                            <div style={{ zIndex: '1' }} className="loader"></div>
                        </React.Fragment>
                        :
                        <img src={"https://media1.giphy.com/media/YSvwImOVlXMS15KeNk/giphy.gif"}
                            className="playPicture"
                            alt={"Loading!"}>
                        </img>
                    }
                </div >
            </div >
        )
    }
}
