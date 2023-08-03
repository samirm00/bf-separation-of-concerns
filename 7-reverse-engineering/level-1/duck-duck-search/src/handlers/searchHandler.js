import dom from '../dom.js';

const searchHandler = () => {
    const value = dom.input.value;
    const url = 'https://duckduckgo.com/' + `?q=${value}`;
    window.open(encodeURI(url));
};

export default searchHandler;
