import dom from '../dom.js';
import averageEvensHandler from '../handlers/averageEvensHandler.js';

const averageEvensListener = () => {
    dom.averageEvens.addEventListener('click', averageEvensHandler);
};

export default averageEvensListener;
