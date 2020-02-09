import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Settings.css'

export default class Settings extends Component {
    ratio = this.props.cares / this.props.bahs;
    span = (ratio) => {
        if (ratio > 0.7) {
            return "It seems that you care a lot... try to relax!"
        }
        else if (ratio > 0.45 && ratio < 0.7) {
            return "So, you are very balanced... you don't like Rock and Roll?"
        }
        else if (ratio < 0.45) {
            return "You don't care about anything! Take it easy!"
        } else {
            return "Keep Bahing so we can tell you something intresting!"
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-background">
                    <h1>Hi {this.props.name}!</h1>
                </div>
                <div className="span-background">
                    <p>This are your current stats</p>
                </div>
                <div className="bah-background">
                    <h1>Bahs!</h1> <h1 style={{ color: '#682727' }}>{this.props.bahs}</h1>
                </div>

                <div className="cares-background">
                    <h1>Cares</h1> <h1 >{this.props.cares}</h1>
                </div>

                <div className="span-background">
                    <p>{this.span(this.ratio)}</p>
                </div>

                <Link to="/play"><p className="return">Keep Bahing!</p></Link>

            </React.Fragment >
        )
    }
}
