import React from 'react';
import { Link } from "react-router-dom";
import { Col, Card } from 'react-bootstrap';

const ExperienceCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.logo} />
        <Card.Body>
            <Card.Title>
                {props.title} <br />
                {props.dates}
            </Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Link className="btn btn-primary" variant="primary" to={`${props.pageUrl}`}>Learn More</Link>
        </Card.Body>
    </Card>
)

export { ExperienceCard as default };