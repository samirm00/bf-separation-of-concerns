import data from '../data.js';
import filterFood from '../utils/filterFood.js';

const searchHandler = () => {
    // read & process user input
    const query = prompt('enter a search query');
    if (!query) {
        return;
    }

    const results = filterFood(data.foods, query);

    const message = `foods matching "${query}":${results}`;
    alert(message);

    console.log(query);
};

export default searchHandler;
