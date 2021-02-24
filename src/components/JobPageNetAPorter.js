import React, { Fragment, useEffect } from 'react';
import SubPageComponent from './SubPageComponent';
import PageHeader from "./PageHeader";
import JobProfileComponent from "./JobProfileComponent";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchExperienceDataAction";

const pageTitle = {
    firstWord: "Net-",
    secondWord: "A",
    thirdWord: "-Porter"
}

const { firstWord, secondWord, thirdWord } = pageTitle;

const JobPageNetAPorter = () => {
    const dispatch = useDispatch();
    const {
        error,
        loading,
        nap,
        napSummary
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
                    <SubPageComponent subPageHeader={<PageHeader firstWord={firstWord} secondWord={secondWord} thirdWord={thirdWord} />} jobComponent={<JobProfileComponent jobTitle={nap.jobTitle} dates={nap.dates} website={nap.website} location={nap.location} summary={napSummary.map((item, i) => <p key={i}>{item}</p>)} />} />
                )}
        </Fragment>
    )
}


export { JobPageNetAPorter as default };