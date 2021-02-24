import React from "react";
import { Container, Col } from 'react-bootstrap';
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

const pageTitle = {
    firstWord: "Contact",
    secondWord: "Me"
}

const { firstWord, secondWord } = pageTitle;

const ContactMePage = () => (

    <Container fluid className="p-0">
        <section className="general-section" id="about" >
            <PageHeader firstWord={firstWord} secondWord={secondWord} />
            <div className="general-section__content">
                <Col>
                    <div>
                        <ContactForm />

                    </div>
                </Col>
            </div>
        </section>
    </Container>
)

export { ContactMePage as default };