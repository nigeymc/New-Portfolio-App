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

export const fetchEducationData = () => {
    return (dispatch) => {
        dispatch(setDataLoading(true)); // <-- start loading
        return database.ref('education')
            .once('value')
            .then((snapshot) => {
                const education = [];

                snapshot.forEach((child) => {
                    education.push({
                        ...child.val()
                    })
                })

                const [university, school] = education;

                dispatch(fetchDataSuccess({ university, school }));
            })
            .catch((e) => {
                console.error('Error fetching data', e);
                dispatch(fetchDataFailure());
            })
            .finally(() => dispatch(setDataLoading(false))); // <-- complete loading
    };
};
