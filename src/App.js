import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Play from './Components/Play/Play'
import Settings from './Components/Settings/Settings';

export class App extends Component {
    render() {
        return (
            <div class="main-container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/play" component={Play} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </div >

        )
    }
}

export default App
