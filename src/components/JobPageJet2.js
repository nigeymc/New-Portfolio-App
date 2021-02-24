import React, { Fragment, useEffect } from 'react';
import SubPageComponent from './SubPageComponent';
import PageHeader from "./PageHeader";
import JobProfileComponent from "./JobProfileComponent";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchExperienceDataAction";

const pageTitle = {
    firstWord: "Jet2",
    secondWord: ".com"
}

const { firstWord, secondWord } = pageTitle;

const JobPageJet2 = () => {
    const dispatch = useDispatch();
    const {
        error,
        loading,
        jet2,
        jet2Summary
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
                    <SubPageComponent subPageHeader={<PageHeader firstWord={firstWord} secondWord={secondWord} />} jobComponent={<JobProfileComponent jobTitle={jet2.jobTitle} dates={jet2.dates} website={jet2.website} location={jet2.location} summary={jet2Summary.map((item, i) => <p key={i}>{item}</p>)} />} />
                )}
        </Fragment>
    )
}

export { JobPageJet2 as default };