import React, { Fragment, useEffect } from 'react';
import { Container, Col, Alert } from 'react-bootstrap';
import PageHeader from "./PageHeader";
import LoadingSpinner from "./LoadingSpinner";
import GithubProjects from "./GithubProjectsComponent";
import ProjectCard from "./NonGithubProjectCard"
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../actions/fetchProjectsDataAction';

const pageTitle = {
    firstWord: "My",
    secondWord: "Projects"
}

const { firstWord, secondWord } = pageTitle;

const MyProjectsPage = () => {

    const dispatch = useDispatch();

    const {
        error,
        loading,
        portfolioThumbnail,
        expensifyThumbnail,
        newFeaturesThumbnail,
        nonGithubProjects
    } = useSelector(state => state.projectsData);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    return (
        <Container fluid className="p-0">
            <section className="general-section" id="projects">
                <PageHeader firstWord={firstWord} secondWord={secondWord} />
                <div className="general-section__content">

                    <Col>
                        <h3>Code</h3>
                        <p>Some of my personal projects.</p>
                        <div className="cards">
                            <GithubProjects portfolioThumbnail={portfolioThumbnail} expensifyThumbnail={expensifyThumbnail} newFeaturesThumbnail={newFeaturesThumbnail} />
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <h3>River Island</h3>
                        <p>Examples of some of the work I did whilst working at River Island for RI Tech. As the code is part of a private repo, below are some screenshots instead. Working examples of some of these features can be found at <a title="The River Island website" href="https://www.riverisland.com/" target="_blank">riverisland.com</a> </p>
                        <div className="cards">
                            {
                                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                            }
                            {loading ? (
                                <LoadingSpinner />
                            ) : (
                                    nonGithubProjects.map((project) => (
                                        <ProjectCard key={project.title.toLowerCase().replace(" ", "-")} thumbnail={project.thumbnail} title={project.title} category={project.category} description={project.summary} />

                                    ))
                                )}
                        </div>
                    </Col>
                </div>
            </section>
        </Container>
    )
}

export { MyProjectsPage as default };