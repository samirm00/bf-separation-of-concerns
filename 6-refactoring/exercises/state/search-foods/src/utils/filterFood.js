const filterFood = (foods, query) => {
    if (query === '') {
        return '';
    }
    const result = foods
        .filter((food) => food.includes(query))
        .map((food) => `\n- ${food}`)
        .join('');

    return result;
};

export default filterFood;
