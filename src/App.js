import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Bd from './utils/button.jsx';
import Header from './layout/header.jsx';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
      open: false,
    }
  }
  learnReact = () => {
    this.setState({
      value: "value"
    })
    this.props.history.push('/form');
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <IconButton aria-label="Delete">
            <SvgIcon>
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </SvgIcon>
          </IconButton>
          <Bd onClick={this.learnReact} textprops={'BUTTON'} />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
