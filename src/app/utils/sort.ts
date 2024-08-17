export const sortByInt = (data, sortArg: string, order?: string) => {
    let sorted = data.sort((a, b) => parseFloat(b[sortArg]) - parseFloat(a[sortArg]));

    if(order === 'asc') {
        sorted.reverse();
    }

    return sorted;
};

export const sortByStr = (data, sortArg: string, order?: string) => {
    let sorted = data.sort((a, b) => {
        if (a[sortArg] > b[sortArg])
            return -1;
        if (a[sortArg] < b[sortArg])
            return 1;
        return 0;
    });

    if(order === 'asc') {
        sorted.reverse();
    }

    return sorted;
}
