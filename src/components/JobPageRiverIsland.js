import React, { Fragment, useEffect } from 'react';
import SubPageComponent from './SubPageComponent';
import PageHeader from "./PageHeader";
import JobProfileComponent from "./JobProfileComponent";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchExperienceDataAction";

const pageTitle = {
    firstWord: "River",
    secondWord: "Island"
}

const { firstWord, secondWord } = pageTitle;

const JobPageRiverIsland = () => {
    const dispatch = useDispatch();
    const {
        error,
        loading,
        riverIsland,
        riSummary
    } = useSelector(state => state.experiencePage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Fragment>
            {
                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
            }
            {loading ? (
                <LoadingSpinner />
            ) : (
                    <SubPageComponent subPageHeader={<PageHeader firstWord={firstWord} secondWord={secondWord} />} jobComponent={<JobProfileComponent jobTitle={riverIsland.jobTitle} dates={riverIsland.dates} website={riverIsland.website} location={riverIsland.location} summary={riSummary.map((item, i) => <p key={i}>{item}</p>)} />} />
                )}
        </Fragment>

    )
}

export { JobPageRiverIsland as default };