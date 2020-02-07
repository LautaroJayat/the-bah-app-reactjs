import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Play from './Components/Play/Play'
import Settings from './Components/Settings/Settings';

export class App extends Component {
    state = {
        name: "Alejandro",
        email: "",
        password: "",
        news: [],
        cares: 0,
        bahs: 0,
        counter: 0
    }



    addName = () => { }
    addmail = () => { }
    addPassword = () => { }


    fetchNews = () => {
        fetch("https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp")
            .then(res => res.json())
            .then(res => { this.setState({ news: [...this.state.news, ...res.results] }); console.log(this.state.news[0].title) })
            .catch(err => console.log(err))
    }
    bahNew = () => {
        let updated = this.state.news.slice(1);
        this.setState({ news: updated, counter: this.state.counter + 1 });
        console.log(this.state.news[0].title)
    }
    careAbout = () => { }


    render() {
        return (
            <div className="main-container" >
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} fetchNews={this.fetchNews} />} />
                    <Route path="/play" render={(props) => <Play {...props} count={this.state.count} counter={this.state.counter} bahNews={this.bahNew} fetchNews={this.fetchNews} news={this.state.news} />} />
                    <Route path="/settings" render={(props) => <Settings {...props} name={this.state.name} />} />
                </Switch>
            </div >

        )
    }
}

export default App
