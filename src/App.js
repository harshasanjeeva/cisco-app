import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Label, Button,Dropdown,FormGroup, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Child from './ChildComponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectValue:0,
      selectGender:"None"
    };
  }

  //toggling of the dropdown
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  //general onChange function for the rank values
  handleChange(e){
    this.setState({selectValue:e.target.value});
  }

  //general onChange function for the gender values
  handleChangeGender(e){
    this.setState({selectGender:e.target.value});
  }


  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cisco App</h1>
        </header>
        
        <Router>
        <div>
          <h3>Choose the Profiles</h3>

          <Dropdown size="lg"  style={{display: "inline"}} isOpen={this.state.dropdownOpen} toggle={this.toggle} >
          <DropdownToggle caret>
            Profile
          </DropdownToggle>
          <DropdownMenu style={{width:"200px"}}>
            <DropdownItem header> Contents </DropdownItem>
            <DropdownItem divider />

            <DropdownItem disabled>Profile 1</DropdownItem>   
            <Row>
            <Col>
              <FormGroup>
            
                <Label>Rank</Label>
                <Input type="select" name="select" id="exampleSelect"        value={this.state.selectValue} 
                onChange={this.handleChange.bind(this)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
              </FormGroup>

            </Col>
            <Col>
              <FormGroup>
                <Label>Gender</Label>
                <Input type="select" name="select" id="exampleSelect"        value={this.state.selectGender} 
                onChange={this.handleChangeGender.bind(this)}>
                <option value="None">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <DropdownItem>  
        
          <Button color="success">
          
          <Link style={{color:"white"}} to={"/Profile1?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Go</Link>
          </Button>
          </DropdownItem>




          <DropdownItem divider />
            <DropdownItem disabled>Profile 2</DropdownItem> 
             
            
            <Row>
            <Col>
          <FormGroup>
        
            <Label>Rank</Label>
            <Input type="select" name="select" id="exampleSelect"        value={this.state.selectValue} 
            onChange={this.handleChange.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
          </FormGroup>

          </Col>
          <Col>
          <FormGroup>
          <Label>Gender</Label>
          <Input type="select" name="select" id="exampleSelect"        value={this.state.selectGender} 
          onChange={this.handleChangeGender.bind(this)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Input>
        </FormGroup>
        </Col>
        </Row>
          <DropdownItem>  
         
          <Button color="success">
          
          <Link style={{color:"white"}} to={"/Profile2?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Go</Link>
          </Button>
          </DropdownItem>
          
          
          <DropdownItem divider />
          <DropdownItem disabled>Profile 3</DropdownItem> 
          
          <Row>
          <Col>
        <FormGroup>
          <Label>Rank</Label>
          <Input type="select" name="select" id="exampleSelect"        value={this.state.selectValue} 
          onChange={this.handleChange.bind(this)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
        </FormGroup>
        </Col>

        <Col>
        <FormGroup>
        <Label>Gender</Label>
        <Input type="select" name="select" id="exampleSelect"        value={this.state.selectGender} 
        onChange={this.handleChangeGender.bind(this)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Input>
      </FormGroup>
      </Col>
      </Row>
        <DropdownItem>  
     
        <Button color="success">
        <Link style={{color:"white"}} to={"/Profile3?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Go</Link>
        </Button>
        </DropdownItem>


        </DropdownMenu>
        </Dropdown>
      
       <hr/>
       <br/>
      
          <Route path="/:id" component={Child}  />
  
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
