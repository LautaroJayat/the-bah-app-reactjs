import React, { Component } from 'react'
import './Play.css'


export default class Picture extends Component {
    flexContainer = {
        position: 'absolute',
        top:'12%',
        height: '40%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
    containerStyle = {
        width: '80%',
        height: '100%',
        maxWidth: '300px',
        overflow:'hidden',
        borderRadius:'10%',
        filter:'drop-shadow(5px 5px 10px black)'


    }
    render() {
        return (
            <div style={this.flexContainer}>
                <div style={this.containerStyle}>
                    <img src={"https://img-cdn.hipertextual.com/files/2020/01/hipertextual-brote-coronavirus-obliga-huawei-posponer-uno-sus-eventos-mas-importantes-2020255386.jpg?strip=all&lossy=1&quality=55&resize=740%2C490&ssl=1"} className="playPicture" alt="something"></img>
                </div >
            </div>
        )
    }
}
