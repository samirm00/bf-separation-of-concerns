const createSelect = (selectData) => {
    // create select
    const select = document.createElement('select');
    select.name = selectData.name;

    const options = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];
    options.forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.innerText = value;
        select.append(option);
    });

    return select;
};

export default createSelect;
