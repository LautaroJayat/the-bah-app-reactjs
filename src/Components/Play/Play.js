import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Play.css'
import search from './search-24px.svg'
import Picture from './Picture'
import Caption from './Caption'
import Buttons from './Buttons'


export class Play extends Component {
    state = { search: "" }
    onChange = (e) => {
        this.setState({ search: e.target.value })
    }

    onClick = () => {
        this.props.searchBah(this.state.search);
        this.setState({ search: "" });
    }

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
                    <input onChange={this.onChange} type="text" placeholder="Looking to Bah something?"></input>
                    <button onClick={this.onClick} className="searchButton"><img src={search} alt="search button"></img></button>
                </div>
                <React.Fragment
                    key={
                        this.props.news.length > 0 ?
                            this.props.news[0].key : 0
                    }>
                    <Picture
                        shouldUpdate={this.props.shouldUpdate}
                        counter={this.props.counter}
                        news={this.props.news} />

                    <Caption

                        shouldUpdate={this.props.shouldUpdate}
                        counter={this.props.counter}
                        news={this.props.news} />

                    <Buttons
                        bahNews={this.props.bahNews}
                        careAbout={this.props.careAbout}
                        fetchNews={this.props.fetchNews}
                        news={this.props.news} />
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default Play