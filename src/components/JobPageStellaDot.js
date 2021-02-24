import React, { Fragment, useEffect } from 'react';
import SubPageComponent from './SubPageComponent';
import PageHeader from "./PageHeader";
import JobProfileComponent from "./JobProfileComponent";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchExperienceDataAction";

const pageTitle = {
    firstWord: "Stella",
    secondWord: "&",
    thirdWord: "Dot"
}

const { firstWord, secondWord, thirdWord } = pageTitle;

const JobPageStellaDot = (props) => {
    const dispatch = useDispatch();
    const {
        error,
        loading,
        stellaDot,
        sdSummary
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
                    <SubPageComponent subPageHeader={<PageHeader firstWord={firstWord} secondWord={secondWord} thirdWord={thirdWord} />} jobComponent={<JobProfileComponent jobTitle={stellaDot.jobTitle} dates={stellaDot.dates} website={stellaDot.website} location={stellaDot.location} summary={sdSummary.map((item, i) => <p key={i}>{item}</p>)} />} />
                )}
        </Fragment>
    )
}


export { JobPageStellaDot as default };