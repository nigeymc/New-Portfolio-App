import React, { Fragment, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import LoadingSpinner from "./LoadingSpinner";
import ProjectCard from "./ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchGithubDataAction";

const GithubProjects = (props) => {

    const dispatch = useDispatch();

    const {
        error,
        loading,
        expensify,
        portfolio,
        hooks
    } = useSelector(state => state.githubData);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <Fragment>
            {
                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
            }
            {
                loading ? (
                    <LoadingSpinner />
                ) : (
                        <Fragment>
                            <ProjectCard thumbnail={props.portfolioThumbnail} title={portfolio.name} description={portfolio.description} pageUrl={portfolio.url} />
                            <ProjectCard thumbnail={props.expensifyThumbnail} title={expensify.name} description={expensify.description} pageUrl={expensify.url} />
                            <ProjectCard thumbnail={props.newFeaturesThumbnail} title={hooks.name} description={hooks.description} pageUrl={hooks.url} />
                        </Fragment>
                    )
            }
        </Fragment>
    )
}

export { GithubProjects as default };

