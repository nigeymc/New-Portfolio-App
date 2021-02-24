import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Accordion } from 'react-bootstrap';

const QualificationsComponent = (props) => {

    const [leftShow, setLeftShow] = useState({ "zIndex": "1" });
    const [leftHide, setLeftHide] = useState({ "zIndex": "-1" });
    const [rightShow, setRightShow] = useState({ "zIndex": "1" });
    const [rightHide, setRightHide] = useState({ "zIndex": "-1" });
    const accordionAStateData = JSON.parse(localStorage.getItem("accordionA"));
    const [accordionA, ,] = useState(accordionAStateData ? accordionAStateData : "1");
    const accordionBStateData = JSON.parse(localStorage.getItem("accordionB"));
    const [accordionB, ,] = useState(accordionBStateData ? accordionBStateData : "1");

    const handleLeftClick = (e) => {
        setLeftShow(leftShow ? leftHide : leftShow)
        setLeftHide(leftHide ? leftShow : leftHide)
    }

    const handleRightClick = (e) => {
        setRightShow(rightShow ? rightHide : rightShow)
        setRightHide(rightHide ? rightShow : rightHide)
    }

    return (

        <Fragment>
            <h3>My Qualifications</h3>
            <Row>
                <Col md="6">
                    <Accordion defaultActiveKey={accordionA} onSelect={(e) => {
                        e !== null
                            ? localStorage.setItem("accordionA", e)
                            : localStorage.setItem("accordionA", "1");
                    }}>
                        <Card>
                            <Accordion.Toggle role="button" as={Card.Header} eventKey="0" onClick={handleLeftClick}>
                                <span style={leftShow ? leftShow : leftHide} className="toggle__icon"><i className="fas fa-minus-circle"></i></span>
                                <span className="toggle__icon"><i className="fas fa-plus-circle"></i></span>
                                <h4>{props.university}</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{props.uniStudied} · {props.uniQualification}</p>
                                    <p>{props.other}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col md="6">
                    <Accordion defaultActiveKey={accordionB} onSelect={(e) => {
                        e !== null
                            ? localStorage.setItem("accordionB", e)
                            : localStorage.setItem("accordionB", "1");
                    }}>
                        <Card>
                            <Accordion.Toggle role="button" as={Card.Header} eventKey="0" onClick={handleRightClick}>
                                <span style={rightShow ? rightShow : rightHide} className="toggle__icon"><i className="fas fa-minus-circle"></i></span>
                                <span className="toggle__icon"><i className="fas fa-plus-circle"></i></span>
                                <h4>{props.school}</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{props.schoolStudied} · {props.schoolQualification}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Fragment>
    )
}

export { QualificationsComponent as default }