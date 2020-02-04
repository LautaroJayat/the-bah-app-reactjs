import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Play.css'
import search from './search-24px.svg'
import Picture from './Picture'
import Caption from './Caption'
import Buttons from './Buttons'


export class Play extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/Settings">
                    <div className="menu-container">
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                    </div>
                </Link>
                <div className="searchBox">
                    <input type="text" placeholder="Looking to Bah something?"></input>
                    <button className="searchButton"><img src={search} alt="search button"></img></button>
                </div>
                <Picture />
                <Caption />
                <Buttons />
            </React.Fragment>
        )
    }
}

export default Play