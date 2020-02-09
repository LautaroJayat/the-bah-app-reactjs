import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import uuid from 'uuid'
import './App.css';
import Home from './Components/Home/Home'
import Play from './Components/Play/Play'
import Settings from './Components/Settings/Settings';

export class App extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        news: [],
        cares: 0,
        bahs: 0,
        shouldUpdate: true
    }



    keywords = ['bank', 'trump', 'obama', 'clinton', 'war', 'tv', 'wind', 'marilyn', 'dinosaur', 'diet', 'rock', 'winter', 'flood', 'evolution', 'china', 'japan', 'argentina', 'zimbawe', 'corea', 'namibia', 'rusia', 'venezuela', 'virus', 'water', 'macdonalds', 'nuclear', 'space', 'congress', 'madonna', 'monkey', 'nintendo', 'tsunami', 'africa']
    keywordCount = 0;

    addName = (name) => {
        this.setState({ name: name });
    }
    addMail = () => { }
    addPassword = () => { }


    fetchNews = () => {
        console.log("fetching!");
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.keywords[this.keywordCount]}&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                var results = res.response.docs.filter((e) => e.multimedia.length > 0);
                results = results.map((e) => ({
                    key: uuid.v4(),
                    image: "https://www.nytimes.com/" + e.multimedia[0].url,
                    caption: e.snippet.length < 151 ? e.snippet : e.snippet.substr(0, 150) + "...",
                    alt: e.snippet
                }));

                this.setState({ news: [...this.state.news, ...results] });
                this.keywordCount++
                console.log(this.state.news);
            })
            .catch(err => { console.log(err); console.log(this.state.news) })

    }
    bahNew = () => {
        if (this.state.news.length > 0) {
            this.state.news.shift();
        } else {
            this.setState({ news: [] })
        }
        console.log(this.state.news)

        if (this.state.news.length < 7) {
            console.log("fetching!");
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.keywords[this.keywordCount]}&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    var results = res.response.docs.filter((e) => e.multimedia.length > 0);
                    results = results.map((e) => ({
                        key: uuid.v4(),
                        image: "https://www.nytimes.com/" + e.multimedia[0].url,
                        caption: e.snippet.length < 151 ? e.snippet : e.snippet.substr(0, 150) + "...",
                        alt: e.snippet
                    }));

                    this.setState({ news: [...this.state.news, ...results] });
                    this.keywordCount++
                    console.log(this.state.news);
                })
                .catch(err => { console.log(err); console.log(this.state.news) })
        }

        this.setState({ bahs: this.state.bahs + 1 });
    }
    careAbout = () => {
        if (this.state.news.length > 0) {
            this.state.news.shift();
        } else {
            this.setState({ news: [] })
        }
        console.log(this.state.news)
        if (this.state.news.length < 7) {

            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.keywords[this.keywordCount]}&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    var results = res.response.docs.filter((e) => e.multimedia.length > 0);
                    results = results.map((e) => ({
                        key: uuid.v4(),
                        image: "https://www.nytimes.com/" + e.multimedia[0].url,
                        caption: e.snippet.length < 151 ? e.snippet : e.snippet.substr(0, 150) + "...",
                        alt: e.snippet
                    }));

                    this.setState({ news: [...this.state.news, ...results] });
                    this.keywordCount++
                    console.log(this.state.news)
                })
                .catch(err => { console.log(err); console.log(this.state.news) })
        }

        this.setState({ cares: this.state.cares + 1 });
    }
    searchBah = (keyword) => {
        this.setState({
            shouldUpdate: false
        });
        if (this.state.news.length > 0) {
            this.state.news.shift();
        } else {
            this.setState({ news: [] })
        }
        console.log(this.state.news)

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=1LsdrHGLkK3RG4NTbmDwKAlkcfYTaqqp`)
            .then(res => res.json())
            .then(res => {
                var results = res.response.docs.filter((e) => e.multimedia.length > 0);
                if (results.length === 0) {
                    results[0] = {
                        key: uuid.v4(),
                        caption: "Whopps! We couldn't find any news to bah!",
                        alt: "Whopps! We couldn't find any news to bah!",
                        image: "https://media3.giphy.com/media/7xWFJLdYuEdkk/giphy.gif?cid=790b761166e98e05b2e60e96bff86d00fcf290e7eb4dd97d&rid=giphy.gif"
                    }
                } else {
                    results = results.map((e) => ({
                        key: uuid.v4(),
                        image: "https://www.nytimes.com/" + e.multimedia[0].url || "https://media3.giphy.com/media/7xWFJLdYuEdkk/giphy.gif?cid=790b761166e98e05b2e60e96bff86d00fcf290e7eb4dd97d&rid=giphy.gif",
                        caption: e.snippet.length < 151 ? e.snippet : e.snippet.substr(0, 150) + "..." || "Whopps! We couldn't find any news to bah! ",
                        alt: e.snippet
                    }));
                }

                this.setState({ news: [...results, ...this.state.news] });
                this.keywordCount++
                console.log(this.state.news)
            })
            .then(res => this.setState({ counter: 0, shouldUpdate: true }))
            .catch(err => { console.log(err); console.log(this.state.news) });
    }


    render() {
        return (
            <HashRouter basename="/">
                <div className="main-container" >
                    <Switch>
                        <Route exact path="/" render={(props) =>
                            <Home {...props}
                                fetchNews={this.fetchNews}
                                addName={this.addName}
                                name={this.state.name}
                            />}
                        />

                        <Route path="/play" render={(props) =>
                            <Play {...props}
                                shouldUpdate={this.shouldUpdate}
                                searchBah={this.searchBah}
                                count={this.state.count}
                                counter={this.state.counter}
                                bahNews={this.bahNew}
                                careAbout={this.careAbout}
                                fetchNews={this.fetchNews}
                                news={this.state.news} />}
                        />

                        <Route path="/settings" render={(props) =>
                            <Settings {...props}
                                name={this.state.name}
                                bahs={this.state.bahs}
                                cares={this.state.cares} />} />

                    </Switch>
                </div >
            </HashRouter>

        )
    }
}

export default App
