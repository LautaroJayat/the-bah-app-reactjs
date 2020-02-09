import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import face1 from './face1.jpg'
import drama from './drama.jpg'
import drama2 from './drama2.jpg'


export class Home extends Component {

  state = { inputName: "" }
  onChange = (e) => {
    this.setState({ inputName: e.target.value });
  }
  onSubmit = (e) => {
    if (this.state.inputName === "") {
      this.props.addName("GUEST");
    } else {
      this.props.addName(this.state.inputName);
      this.setState({ inputName: "" })
    }
  }

  render() {
    return (
      <React.Fragment>

        <Link className="skip" to="/play">Skip</Link>


        <svg id="first-svg"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(75,40) rotate(-60)">
            <path d="M159,-183C203.1,-152.4,234,-99.6,225.2,-53.9C216.4,-8.1,168,30.4,136.7,73.5C105.3,116.5,91.1,164,56.2,193.6C21.3,223.3,-34.3,235.2,-74.4,215.7C-114.5,196.3,-139.1,145.4,-165.1,97C-191.2,48.5,-218.7,2.6,-204.4,-28.6C-190.1,-59.8,-133.9,-76.3,-92.9,-107.4C-51.9,-138.5,-25.9,-184.2,15.7,-203C57.4,-221.8,114.8,-213.5,159,-183Z" fill="#0F4C75" />
          </g>
        </svg>
        <div id="decoration-one"></div>
        <Link onClick={this.onSubmit} to="/Settings">
          <div className="menu-container">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
        </Link>

        <div id="first-image">
          <img src={face1} alt="A face with a solid expresion" />
        </div>
        <div id="second-image">
          <img src={drama} alt="A face with a drama expression" />
        </div>
        <div id="third-image">
          <img src={drama2} alt="A face with a drama expression" />
        </div>

        <div className="main-title">
          <span>Wellcome to</span>
          <h1>Bah!</h1>
        </div>
        <input id="name" onChange={this.onChange} name="name" type="text" autoComplete="off" placeholder="What's your name?"></input>

        <svg
          id="start"
          width="800"
          height="800"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"

        >

          <Link onClick={this.onSubmit} to="/play" ><g transform="translate(10,560) rotate(95)">
            <path d="M170.1,-139.1C190.5,-109.9,156.7,-41,129.3,9.6C101.9,60.1,80.9,92.2,44.1,121.3C7.4,150.5,-45.1,176.6,-88.9,163.6C-132.7,150.6,-167.7,98.4,-186.5,36.7C-205.3,-25.1,-207.8,-96.4,-174,-128.6C-140.2,-160.8,-70.1,-153.9,2.3,-155.8C74.8,-157.6,149.6,-168.3,170.1,-139.1Z" fill="#0F4C75" />
          </g></Link>
        </svg>
        <svg id="svg-slogan"
          width="800"
          height="800"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(280,540) rotate(90)">
            <path d="M170.1,-139.1C190.5,-109.9,156.7,-41,129.3,9.6C101.9,60.1,80.9,92.2,44.1,121.3C7.4,150.5,-45.1,176.6,-88.9,163.6C-132.7,150.6,-167.7,98.4,-186.5,36.7C-205.3,-25.1,-207.8,-96.4,-174,-128.6C-140.2,-160.8,-70.1,-153.9,2.3,-155.8C74.8,-157.6,149.6,-168.3,170.1,-139.1Z" fill="#BBE1FA" />
          </g>
        </svg>

        <Link onClick={this.onSubmit} to="/play"><h2 id="start-button">Start!</h2></Link>
        <span id="slogan">Just in time to <strong>Bah!</strong></span>

      </React.Fragment>

    )
  }
}

export default Home;
