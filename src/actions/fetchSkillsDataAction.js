import database from '../firebase/firebase';

const setDataLoading = loading => ({
    type: "FETCH_DATA_LOADING",
    payload: loading,
});

const fetchDataSuccess = payload => ({
    type: "FETCH_DATA_SUCCESS",
    payload,
});

const fetchDataFailure = () => ({
    type: "FETCH_DATA_FAILURE"
});

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(setDataLoading(true)); // <-- start loading
        return database.ref('skillsPage')
            .once('value')
            .then((snapshot) => {
                const skillsPage = [];

                snapshot.forEach((child) => {
                    skillsPage.push({
                        ...child.val()
                    });
                });
                const [languages, frameworks, services, tools, skillset, education] = skillsPage;

                const educationArr = education.education.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);

                const [university, school] = educationArr

                const setLanguages = languages.languages;
                const setFrameworks = frameworks.libraries_frameworks;
                const setServices = services.services;
                const setTools = tools.tools;
                const setSkillset = skillset.skillset;

                const searchList = [...setLanguages, ...setFrameworks, ...setServices, ...setTools, ...setSkillset];

                const skillsKeys = skillsPage.map((item) => {
                    return Object.keys(item);
                }, [])

                const [langKey, frameworksKey, servicesKey, toolsKey, skillsetKey] = skillsKeys;

                const skillsValues = skillsPage.map((item) => {
                    return Object.values(item);
                }, []);

                const skillsValuesArr = skillsValues.reduce((sum, item) => {
                    return sum.concat(item);
                }, []);

                const [languagesVals, frameworksVals, servicesVals, toolsVals, skillsetVals] = skillsValuesArr;

                dispatch(fetchDataSuccess({ languages, frameworks, services, tools, skillset, university, school, searchList, langKey, frameworksKey, servicesKey, toolsKey, skillsetKey, languagesVals, frameworksVals, servicesVals, toolsVals, skillsetVals }));

            })
            .catch((e) => {
                console.error('Error fetching data', e);
                dispatch(fetchDataFailure());
            })
            .finally(() => dispatch(setDataLoading(false))); // <-- complete loading
    };
};
