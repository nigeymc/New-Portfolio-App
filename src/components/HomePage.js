import React, { useEffect } from "react";
import { Container, Alert } from 'react-bootstrap';
import HomePageTitle from "../components/HomePageTitle";
import SocialIcons from "./SocialIcons";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchHomepageDataAction";

const HomePage = () => {
    const dispatch = useDispatch();
    const {
        error,
        firstName,
        lastName,
        jobTitle,
        city,
        linkedIn,
        gitHub
    } = useSelector(state => state.homepage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Container fluid className="p-0">
            <section className="homepage-section" id="homepage">
                <div className="homepage-section__content">
                    {
                        error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                    }
                    <HomePageTitle firstName={firstName} lastName={lastName} jobTitle={jobTitle} city={city} />
                    <SocialIcons linkedIn={linkedIn} gitHub={gitHub} />
                </div>
            </section>
        </Container>
    )
}

export { HomePage as default };


