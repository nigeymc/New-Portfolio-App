import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col } from 'react-bootstrap';

const SubPageComponent = (props) => (
    <Container fluid className="p-0">
        <section className="general-section general-section" id="experience">
            {props.subPageHeader}
            <div className="general-section__content">
                <Col>
                    {props.jobComponent}
                    <Link className="btn btn-primary" variant="primary" to={`/my-experience`}>Back to My Experience</Link>
                </Col>
            </div>
        </section>
    </Container>
)

export { SubPageComponent as default };