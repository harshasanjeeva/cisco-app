import React from 'react';
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
export default Child;