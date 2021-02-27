import React, { Fragment, useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const ProjectCard = (props) => {
    const [modalShow, setModalShow] = useState(false);

    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.image}
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <Fragment>
            <Card>
                <Card.Img variant="top" src={props.thumbnail} onClick={() => setModalShow(true)} />
                <Card.Body>
                    <Card.Title>
                        {props.title} <br />
                        {props.category}
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <MyVerticallyCenteredModal
                image={<img src={props.thumbnail} />}
                title={props.title}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>

    )
}

export { ProjectCard as default };