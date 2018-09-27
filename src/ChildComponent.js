import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import {withRouter} from 'react-router-dom';



const Child = ({ match, location }) => {

    var searchParams = new URLSearchParams(location.search)
    return  (<div>
      <container>
      {console.log(match.params)}
      <h3>{match.params.id}</h3>
      <Row>
      <Col xs="3">Rank chosen:</Col>
      <Col xs="auto"><h3>{searchParams.get('rank')}</h3></Col>
      </Row>
      <Row>
      <Col xs="3">Gender chosen:</Col>
      <Col xs="auto"><h3>{searchParams.get('gender')}</h3></Col>
      </Row>

   
      <Button   style={{marginLeft:"30px"}} color="success" href="/" > Refresh </Button>
      </container>
    </div>
  );
  
  }
export default Child;