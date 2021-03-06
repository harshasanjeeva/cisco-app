import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, withRouter,Route, Link } from "react-router-dom";
import { Row, Col, Label, Button,Dropdown,FormGroup, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class HomeComponent extends Component {
    constructor(props) {
      super(props);
      this.routeChange = this.routeChange.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        selectValue:0,
        selectGender:"None"
      };
    }
    routeChange(){
        let path = `/`;
        this.props.history.push(path);
        console.log("Here")
        }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  
    handleChange(e){
      this.setState({selectValue:e.target.value});
    }
  
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
            
            <Link style={{color:"white"}} to={"profile/Profile-1?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender} >Page 1</Link>
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
            
            <Link style={{color:"white"}} to={"profile/Profile-2?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Go</Link>
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
          
          <Link style={{color:"white"}} to={`profile/Profile-3?rank=${this.state.selectValue}&gender=${this.state.selectGender}`}
         
          
          >Go</Link>
          </Button>
          </DropdownItem>
  
  
            </DropdownMenu>
          </Dropdown>
        <Button   style={{marginLeft:"30px"}} color="success" onClick={this.routeChange}>Refresh</Button>
         <hr/>
         <br/>
          
    
  
          </div>
        </Router>
  
      
          
        </div>
      );
    }
  }
  
  export default withRouter(HomeComponent);