export const updateMyAge = () => {
    const now = new Date();
    const birth = new Date('1984-09-10');
    const difference = now - birth;
    // Dates are set from 1970, so remove that to get the year 
    const age = new Date(difference).getFullYear() - 1970
    return age;
}