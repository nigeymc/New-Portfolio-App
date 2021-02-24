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
        return database.ref('employment')
            .once('value')
            .then((snapshot) => {
                const employment = [];

                snapshot.forEach((child) => {
                    employment.push({
                        ...child.val()
                    });
                });

                const [riverIsland, stellaDot, nap, jet2] = employment;

                const riSummary = riverIsland.summary.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);

                const sdSummary = stellaDot.summary.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);

                const napSummary = nap.summary.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);

                const jet2Summary = jet2.summary.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);


                dispatch(fetchDataSuccess({ employment, riverIsland, riSummary, stellaDot, sdSummary, nap, napSummary, jet2, jet2Summary }));
            })
            .catch((e) => {
                console.error('Error fetching data', e);
                dispatch(fetchDataFailure());
            })
            .finally(() => dispatch(setDataLoading(false))); // <-- complete loading
    };
};
