const castValue = (type, value) => {
    let newValue;
    if (type === 'string') {
        newValue = String(value);
    } else if (type === 'number') {
        newValue = Number(value);
    } else if (type === 'boolean') {
        newValue = Boolean(value);
    } else {
        newValue = undefined;
    }

    return newValue;
};

export default castValue;
