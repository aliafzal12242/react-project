import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';


function Home() {
  return (
    <Container className="home">
      <Row>
        <Col>
          <h1>Welcome to My Web App!</h1>
          <p>Explore our features and get started today.</p>
         
        </Col>
        <Col>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWmH0dn5vZBvLQOrP2i1g01B8nlvNDQaGMA&usqp=CAU" alt="Web App Homepage" style={{ width: '2000px', height: '400px' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
