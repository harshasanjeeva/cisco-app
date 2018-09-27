import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cisco App</h1>
        </header>
        


        <p className="App-intro">


        <Router>
        <div>
          <h2>Profile</h2>

          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>   <Link to="/netflix">Netflix</Link> </DropdownItem>
            <DropdownItem divider />
            <DropdownItem><Link to="/zillow-group">Zillow Group</Link></DropdownItem>
            <DropdownItem divider />
            <DropdownItem>   <Link to="/yahoo">Yahoo</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>

       
          <Route path="/:id" component={Child} />
  
          <Route
            path="/order/:direction(asc|desc)"
            component={ComponentWithRegex}
          />
        </div>
      </Router>

    
        </p>
      </div>
    );
  }
}

export default App;
