import React, { useEffect } from "react";
import { Container, Col } from 'react-bootstrap';
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import SocialIcons from "../components/SocialIcons";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchHomepageDataAction";

const pageTitle = {
    firstWord: "Contact",
    secondWord: "Me"
}

const { firstWord, secondWord } = pageTitle;

const ContactMePage = () => {

    const dispatch = useDispatch();

    const {
        linkedIn,
        gitHub
    } = useSelector(state => state.homepage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (

        <Container fluid className="p-0">
            <section className="general-section" id="contact">
                <PageHeader firstWord={firstWord} secondWord={secondWord} />
                <div className="general-section__content--columns">
                    <Col md={8} lg={10}>
                        <div>
                            <p>Drop me line, or feel free to get social with me.</p>
                            <ContactForm />
                        </div>
                    </Col>
                    <Col md={4} lg={2} className="mt-5" style={{ textAlign: "center" }}>
                        <p className="mt-2">Follow me on</p>
                        <SocialIcons linkedIn={linkedIn} gitHub={gitHub} />
                    </Col>
                </div>
            </section>
        </Container>
    )
}

export { ContactMePage as default };