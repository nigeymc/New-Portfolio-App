import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <Container fluid className="p-0" id="not-found">
      <section className="general-section--not-found">
        <div className="glitch-text">
          <h1>Error 404: Page Not Found</h1>
        </div>
        <Link to="/"><Button className="btn btn-primary" variant="primary">Go home</Button></Link>
      </section>
    </Container>
  )
};

export default NotFoundPage;
