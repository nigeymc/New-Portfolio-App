// Update Day of the week fucntion
export const updateDayOfTheWeek = () => {
    const days = ['making the most of Sunday', 'making it through Monday', 'surviving Tuesday', 'killing Wednesday', 'beasting Thursday', 'having a great Friday & ready for the weekend', 'enjoying your Saturday'];
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = days[0];
            break;
        case 1:
            day = days[1];
            break;
        case 2:
            day = days[2];
            break;
        case 3:
            day = days[3];
            break;
        case 4:
            day = days[4];
            break;
        case 5:
            day = days[5];
            break;
        case 6:
            day = days[6];
    }

    return day
}

// Update my age function

export const updateMyAge = () => {
    const now = new Date();
    const birth = new Date('1984-09-10');
    const difference = now - birth;
    // Dates are set from 1970, so remove that to get the year 
    const age = new Date(difference).getFullYear() - 1970
    return age;
}

export const flattenObject = (yourObject) => {
    return Object.assign(
        {},
        ...function _flatten(o) {
            return [].concat(...Object.keys(o)
                .map(k =>
                    typeof o[k] === 'object' ?
                        _flatten(o[k]) :
                        ({ [k]: o[k] })
                )
            );
        }(yourObject)
    )
}