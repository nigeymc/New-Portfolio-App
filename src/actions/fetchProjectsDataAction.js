import database from '../firebase/firebase';

const setDataLoading = loading => ({
    type: "FETCH_DATA_LOADING",
    payload: loading,
});

const fetchDataSuccess = payload => ({
    type: "FETCH_DATA_SUCCESS",
    payload, // { firstName, lastName }
});

const fetchDataFailure = () => ({
    type: "FETCH_DATA_FAILURE"
});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(setDataLoading(true)); // <-- start loading
        return database.ref()
            .once('value')
            .then((snapshot) => {
                const portfolioData = snapshot.val();
                const githubProjects = portfolioData.githubProjects;
                const [githubThumbnails] = githubProjects;
                const [portfolioThumbnail, expensifyThumbnail, newFeaturesThumbnail] = githubThumbnails.thumbnails
                const nonGithubProjects = portfolioData.nonGithubProjects;
                console.log(nonGithubProjects);

                dispatch(fetchDataSuccess({ portfolioThumbnail, expensifyThumbnail, newFeaturesThumbnail, nonGithubProjects }));
            })
            .catch((e) => {
                console.error('Error fetching data', e);
                dispatch(fetchDataFailure());
            })
            .finally(() => dispatch(setDataLoading(false))); // <-- complete loading
    };
};
