import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Label, Button,Dropdown,FormGroup, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Child = ({ match, location }) => {

  var searchParams = new URLSearchParams(location.search)
  return  (<div>
    <container>
    <h3>{match.params.id}</h3>
    <Row>
    <Col xs="3">Rank chosen:</Col>
    <Col xs="auto"><h3>{searchParams.get('rank')}</h3></Col>
    </Row>
    <Row>
    <Col xs="3">Rank chosen:</Col>
    <Col xs="auto"><h3>{searchParams.get('gender')}</h3></Col>
    </Row>
    </container>
  </div>
);

}
  


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectValue:1,
      selectGender:"None"
    };
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
          <h2>Profile</h2>

          <Dropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle} >
          <DropdownToggle caret>
            Profile
          </DropdownToggle>
          <DropdownMenu style={{width:"200px"}}>
            <DropdownItem header> Contents </DropdownItem>
            <DropdownItem divider />
            <DropdownItem disabled>Profile 1</DropdownItem> Profile 1 
             
            
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
          {console.log(this.state.selectValue)}
          <Button color="success">
          
          <Link style={{color:"white"}} to={"/Page1?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Page 1</Link>
          </Button>
          </DropdownItem>




          <DropdownItem divider />
                 
            
            
          <FormGroup>
            <Label>Rank</Label>
            <Input type="select" name="select" value={this.state.selectValue} 
            onChange={this.handleChange.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
          </FormGroup>



          <FormGroup>
          <Label>Gender</Label>
          <Input type="select" name="select" id="exampleSelect"        value={this.state.selectGender} 
          onChange={this.handleChangeGender.bind(this)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Input>
        </FormGroup>
          <DropdownItem>  
          {console.log(this.state.selectValue)}
          <Button color="success">
          
          <Link style={{color:"white"}} to={"/Page2?rank="+ this.state.selectValue + "&gender=" + this.state.selectGender}>Page 1</Link>
          </Button>
          </DropdownItem>
          
          
          
          
          
          
          
            <DropdownItem divider />
            <DropdownItem>   <Link to="/Page3">Page 3</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>

       
          <Route path="/:id" component={Child}  />
  

        </div>
      </Router>

    
        
      </div>
    );
  }
}

export default App;
