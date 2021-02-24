import React, { Fragment, useState, useEffect } from 'react';
import SkillsListGroup from "./SkillsListGroup";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/fetchSkillsDataAction";

const SkillsGroups = () => {

    const dispatch = useDispatch();

    const {
        error,
        loading,
        langKey,
        frameworksKey,
        servicesKey,
        toolsKey,
        skillsetKey,
        languagesVals,
        frameworksVals,
        servicesVals,
        toolsVals,
        skillsetVals
    } = useSelector(state => state.skillsPage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Fragment>
            <SkillsListGroup groupTitle={langKey} skillsValues={languagesVals} />
            <SkillsListGroup groupTitle={frameworksKey.toString().replace("_", " · ")} skillsValues={frameworksVals} />
            <SkillsListGroup groupTitle={servicesKey} skillsValues={servicesVals} />
            <SkillsListGroup groupTitle={toolsKey} skillsValues={toolsVals} />
            <SkillsListGroup groupTitle={skillsetKey} skillsValues={skillsetVals} />
        </Fragment>
    )
}

export { SkillsGroups as default };