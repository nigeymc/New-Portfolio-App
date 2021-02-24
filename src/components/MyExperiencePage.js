import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/ExperienceCard";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchExperienceDataAction";

const pageTitle = {
    firstWord: "My",
    secondWord: "Experience"
}

const { firstWord, secondWord } = pageTitle;

const MyExperiencePage = () => {
    const dispatch = useDispatch();
    const {
        error,
        loading,
        employment
    } = useSelector(state => state.experiencePage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Container fluid className="p-0">
            <section className="general-section general-section" id="experience">
                <PageHeader firstWord={firstWord} secondWord={secondWord} />
                <div className="general-section__content">
                    <Col>
                        <h3>2009 - Today</h3>
                        <div className="cards">
                            {
                                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                            }
                            {loading ? (
                                <LoadingSpinner />
                            ) : (

                                    employment.map((company) => (
                                        <ExperienceCard key={company.companyName} logo={company.logo} title={company.companyName} dates={company.dates} description={company.description} pageUrl={company.pageUrl} />
                                    ))

                                )}
                        </div>
                    </Col>
                </div>
            </section>
        </Container>
    )
}

export { MyExperiencePage as default };