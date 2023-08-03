import dom from '../dom.js';
import searchHandler from '../handlers/searchHandler.js';

const searchListener = () => {
    dom.btn.addEventListener('click', searchHandler);
};

export default searchListener;
